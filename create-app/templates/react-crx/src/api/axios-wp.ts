import axios, { AxiosError } from "axios";

export const axiosWp = axios.create({
  baseURL: "",
  timeout: 1000 * 60,
});

axiosWp.interceptors.request.use((config) => config);
axiosWp.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  (err: AxiosError) => {
    const { message } = err;
    throw new Error(message);
  }
);
