// Mock Imports
import { mock } from "./mock";

// Mock Login
mock.onPost("/dev/login").reply((config) => {
  const { data } = config;

  try {
    return [200, data];
    // eslint-disable-next-line
  } catch (error: any) {
    const msg = error.message;
    return [403, { msg: msg }];
  }
});
mock.onDelete("/dev/login").reply((config) => {
  const { data } = config;

  try {
    return [200, { data }];
    // eslint-disable-next-line
  } catch (error: any) {
    const msg = error.message;
    return [500, { msg }];
  }
});
