// Axios Imports
import { AxiosRequestConfig } from "axios";
import { axiosWp } from "./axios-wp";

export function html_post(req: Req) {
  return axiosWp<unknown, Res, Data>({
    url: "http://localhost:3002/crawler",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...req,
  });
}

export type Req = AxiosRequestConfig<Data>;

export interface Data {
  html: string;
  url: string;
}

export interface Res {}
