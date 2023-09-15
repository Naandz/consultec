import axios, { AxiosHeaders } from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const api = axios.create({ baseURL: "https://consultech.onrender.com" });

api.interceptors.request.use(async (config) => {
  const { token } = useAuthStore.getState();

  if (token) {
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error?.response?.status === 401 &&
      !window.location.pathname.includes("/session/login")
    ) {
      useAuthStore.getState().logout();
      return window.location.replace("/session/login");
    }

    return Promise.reject(error);
  }
);
export default api;
