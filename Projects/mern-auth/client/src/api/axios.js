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
//     const origin_request = error.config;

//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !origin_request._retry
//     ) {
//       origin_request._retry = true;

//       if (is_refreshing) {
//         return new Promise((resolve, reject) => {
//           subscribe_token_refresh((token) => {
//             if (!token) {
//               return reject(error);
//             }

//             origin_request.headers.Authorization = `Bearer ${token}`;

//             resolve(api(origin_request));
//           });
//         });
//       }

//       is_refreshing = true;

//       try {
//         const res = await api.post("/api/auth/refresh", {});
//         const new_token = res.data.access_token;

//         set_access_token(new_token);
//         is_refreshing = false;
//         on_refreshed(new_token);

//         origin_request.headers.Authorization = `Bearer ${new_token}`;

//         return api(origin_request);
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

// src/api/axios.js
import axios from "axios";

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

// Attach Authorization header if we have a token
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// ---- Refresh logic ----
let isRefreshing = false;
let refreshQueue = [];

const subscribeTokenRefresh = (cb) => {
  refreshQueue.push(cb);
};

const onRefreshed = (newToken) => {
  refreshQueue.forEach((cb) => cb(newToken));
  refreshQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const status = error.response?.status;
    const url = originalRequest?.url || "";

    // If no response or no status (network error, CORS, etc.), just reject
    if (!status) {
      return Promise.reject(error);
    }

    // ⛔️ IMPORTANT:
    // Don't try to refresh if the failing request *is* the refresh endpoint
    const isAuthRefreshCall = url.includes("/api/auth/refresh");

    if (status === 401 && !originalRequest._retry && !isAuthRefreshCall) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Queue this request until the current refresh finishes
        return new Promise((resolve, reject) => {
          subscribeTokenRefresh((token) => {
            if (!token) return reject(error);
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }

      isRefreshing = true;

      try {
        // Call refresh endpoint once
        const res = await api.post("/api/auth/refresh", {});
        const newToken = res.data.access_token;

        setAccessToken(newToken);
        isRefreshing = false;
        onRefreshed(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshErr) {
        isRefreshing = false;
        onRefreshed(null);
        setAccessToken(null);
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
