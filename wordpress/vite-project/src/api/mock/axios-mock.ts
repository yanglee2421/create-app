import axios from "axios";

// instance
export const axiosMock = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60,
});

// interceptor
axiosMock.interceptors.request.use((config) => {
  const jwt = localStorage.getItem("token");
  config.headers.setAuthorization(`Bearer ${jwt}`);
  return config;
});
axiosMock.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
    if (data.code !== 0) throw new Error(data.msg);
    if (data.data) return data.data;
    return data;
  },
  (err) => {
    const { message } = err;

    throw new Error(message);
  }
);
