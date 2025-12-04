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
    const origin_request = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !origin_request._retry
    ) {
      origin_request._retry = true;

      if (is_refreshing) {
        return new Promise((resolve, reject) => {
          subscribe_token_refresh((token) => {
            if (!token) {
              return reject(error);
            }

            origin_request.headers.Authorization = `Bearer ${token}`;

            resolve(api(origin_request));
          });
        });
      }

      is_refreshing = true;

      try {
        const res = await api.post("/api/auth/refresh", {});
        const new_token = res.data.access_token;

        set_access_token(new_token);
        is_refreshing = false;
        on_refreshed(new_token);

        origin_request.headers.Authorization = `Bearer ${new_token}`;

        return api(origin_request);
      } catch (refresh_error) {
        is_refreshing = false;
        on_refreshed(null);
        set_access_token(null);

        return Promise.reject(refresh_error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
