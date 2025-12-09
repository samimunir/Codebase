import axios from "axios";

let access_token = null;

export const set_access_token = (token) => {
  access_token = token;
};

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

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
      "/api/auth/reset-password",
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
