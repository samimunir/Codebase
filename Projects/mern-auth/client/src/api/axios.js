// import axios from "axios";

// let access_token = null;

// export const set_access_token = (token) => {
//   access_token = token;
// };

// const api = axios.create({
//   baseURL: "http://localhost:8080",
//   withCredentials: true,
// });

// api.interceptors.request.use((config) => {
//   if (access_token) {
//     console.log("<api.interceptors.request>: Found & attached access_token");
//     config.headers.Authorization = `Bearer ${access_token}`;
//   }

//   return config;
// });

// let is_refreshing = false;
// let refresh_queue = [];

// const subscribe_token_refresh = (cb) => {
//   refresh_queue.push(cb);
// };

// const on_refreshed = (new_token) => {
//   refresh_queue.forEach((cb) => cb(new_token));
//   refresh_queue = [];
// };

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const original_request = error.config;

//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !original_request._retry
//     ) {
//       console.log("<api.interceptors.response>: Retrying request.");
//       original_request._retry = true;

//       if (is_refreshing) {
//         return new Promise((resolve, reject) => {
//           subscribe_token_refresh((token) => {
//             if (!token) {
//               return reject(error);
//             }
//             console.log(
//               "<api.interceptors.response>: Found & attached access_token from subscribe_token_refresh()."
//             );
//             original_request.headers.Authorization = `Bearer ${token}`;

//             resolve(api(original_request));
//           });
//         });
//       }

//       is_refreshing = true;

//       try {
//         const res = await api.post("/api/auth/refresh", {});
//         console.log("fetching new access_token (refresh)...");
//         const new_token = res.data.access_token;

//         set_access_token(new_token);
//         is_refreshing = false;
//         on_refreshed(new_token);

//         console.log("<api.interceptors.response>: Attaching new access_token");

//         original_request.headers.Authorization = `Bearer ${new_token}`;

//         return api(original_request);
//       } catch (refresh_error) {
//         is_refreshing = false;
//         on_refreshed(null);
//         set_access_token(null);

//         return Promise.reject(refresh_error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;

// src / api / axios.js;

/*
 *********************************************************************************************************
 */

// src/api/axios.js
// import axios from "axios";

// let access_token = null;

// export const set_access_token = (token) => {
//   access_token = token;
// };

// const api = axios.create({
//   baseURL: "http://localhost:8080",
//   withCredentials: true,
// });

// api.interceptors.request.use((config) => {
//   if (access_token) {
//     console.log("<api.request>: Found & attached access_token");
//     config.headers.Authorization = `Bearer ${access_token}`;
//   }
//   return config;
// });

// let is_refreshing = false;
// let refresh_queue = [];

// const subscribe_token_refresh = (cb) => {
//   refresh_queue.push(cb);
// };

// const on_refreshed = (new_token) => {
//   refresh_queue.forEach((cb) => cb(new_token));
//   refresh_queue = [];
// };

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const original_request = error.config;
//     const status = error.response?.status;
//     const url = original_request?.url || "";

//     // Network / CORS / weird errors -> just bubble up
//     if (!status) {
//       return Promise.reject(error);
//     }

//     // 🔴 IMPORTANT:
//     // Do NOT try to refresh if the failing request *is* the refresh endpoint itself.
//     const is_refresh_call = url.includes("/api/auth/refresh");

//     if (status === 401 && !original_request._retry && !is_refresh_call) {
//       console.log("<api.response>: 401 caught, attempting refresh...");
//       original_request._retry = true;

//       if (is_refreshing) {
//         // Queue this request until refresh finishes
//         return new Promise((resolve, reject) => {
//           subscribe_token_refresh((token) => {
//             if (!token) {
//               return reject(error);
//             }
//             console.log(
//               "<api.response>: Attaching access_token from queued refresh"
//             );
//             original_request.headers.Authorization = `Bearer ${token}`;
//             resolve(api(original_request));
//           });
//         });
//       }

//       is_refreshing = true;

//       try {
//         console.log("<api.response>: Calling /api/auth/refresh ...");
//         const res = await api.post("/api/auth/refresh", {});
//         const new_token = res.data.access_token; // make sure backend returns this field

//         set_access_token(new_token);
//         is_refreshing = false;
//         on_refreshed(new_token);

//         console.log("<api.response>: Retrying original request with new token");
//         original_request.headers.Authorization = `Bearer ${new_token}`;
//         return api(original_request);
//       } catch (refresh_error) {
//         console.log("<api.response>: Refresh failed, clearing token");
//         is_refreshing = false;
//         on_refreshed(null);
//         set_access_token(null);
//         return Promise.reject(refresh_error);
//       }
//     }

//     // Either not 401, or it's the refresh call itself: just bubble up
//     return Promise.reject(error);
//   }
// );

// export default api;

// src/api/axios.js
import axios from "axios";

// ---------------------------------------------
// In-memory access token (safe from XSS)
// ---------------------------------------------
let access_token = null;

export const set_access_token = (token) => {
  access_token = token;
};

// ---------------------------------------------
// Axios instance
// ---------------------------------------------
const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // allow sending refresh cookie
});

// ---------------------------------------------
// REQUEST INTERCEPTOR — attach access token
// ---------------------------------------------
api.interceptors.request.use((config) => {
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

// ---------------------------------------------
// RESPONSE INTERCEPTOR — refresh logic
// ---------------------------------------------
let is_refreshing = false;
let refresh_queue = [];

const subscribe_token_refresh = (cb) => {
  refresh_queue.push(cb);
};

const on_refreshed = (new_token) => {
  refresh_queue.forEach((cb) => cb(new_token));
  refresh_queue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original_request = error.config;
    const status = error.response?.status;
    const url = original_request?.url || "";

    if (!status) {
      return Promise.reject(error);
    }

    // ---------------------------------------------
    // 🚫 SKIP REFRESH LOGIC for auth endpoints
    // These should return their REAL error messages.
    // ---------------------------------------------
    const skipRefreshPaths = [
      "/api/auth/login",
      "/api/auth/register",
      "/api/auth/logout",
      "/api/auth/refresh",
    ];

    const shouldSkipRefresh = skipRefreshPaths.some((p) => url.includes(p));

    if (shouldSkipRefresh) {
      return Promise.reject(error);
    }

    // ---------------------------------------------
    // 🔄 REFRESH LOGIC for protected endpoints
    // ---------------------------------------------
    if (status === 401 && !original_request._retry) {
      original_request._retry = true;

      // If a refresh call is already happening → queue this request
      if (is_refreshing) {
        return new Promise((resolve, reject) => {
          subscribe_token_refresh((token) => {
            if (!token) return reject(error);
            original_request.headers.Authorization = `Bearer ${token}`;
            resolve(api(original_request));
          });
        });
      }

      // Mark refresh in progress
      is_refreshing = true;

      try {
        // Attempt refresh
        const refresh_res = await api.post("/api/auth/refresh", {});
        const new_token = refresh_res.data.accessToken;

        // Save token for future requests
        set_access_token(new_token);

        // Release queued requests
        is_refreshing = false;
        on_refreshed(new_token);

        // Retry original request with new access token
        original_request.headers.Authorization = `Bearer ${new_token}`;
        return api(original_request);
      } catch (refresh_err) {
        // Refresh failed → log out user completely
        is_refreshing = false;
        on_refreshed(null);
        set_access_token(null);
        return Promise.reject(refresh_err);
      }
    }

    // If not a 401 we care about, just reject normally
    return Promise.reject(error);
  }
);

export default api;
