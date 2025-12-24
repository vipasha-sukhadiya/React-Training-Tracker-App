import axios from 'axios';
import { getAuthStore } from '../stores/auth.store';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // if using cookies for refresh token
});

// attach token
api.interceptors.request.use((config) => {
  const token = getAuthStore().getState().accessToken;
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// response interceptor: if 401 try refresh, else logout
let refreshing = false;
let failedQueue: {
  resolve: (val?: unknown) => void;
  reject: (err?: any) => void;
}[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token)));
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;
    const authStore = getAuthStore().getState();

    if (status === 401 && !originalRequest._retry) {
      if (refreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            return axios(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      refreshing = true;

      try {
        // attempt refresh
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000'}/auth/refresh`,
          {},
          { withCredentials: true } // send refresh cookie if using cookies
        );
        const newToken = res.data.accessToken;
        // update store
        getAuthStore().getState().setAccessToken(newToken);
        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        processQueue(null, newToken);
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        // force logout
        getAuthStore().getState().logout();
        return Promise.reject(err);
      } finally {
        refreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
