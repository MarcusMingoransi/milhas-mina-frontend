import Axios from "axios";
import { COOKIE_NAME } from "../utils/constants";
import { getCookie } from "../utils/helpers";

const api = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "POST, GET, PUT",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
});

api.interceptors.request.use(
  (config) => {
    const cookie = getCookie(COOKIE_NAME);
    if (cookie) {
      // @ts-ignore
      config.headers["x-access-token"] = cookie.token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
