import { axiosMock } from "./axios-mock";

export function get_bing() {
  return axiosMock({
    url: "/bing",
  });
}
