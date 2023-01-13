import Axios from "axios";

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
    const token = localStorage.getItem("token"); // TODO: Implement httpOnly
    // @ts-ignore
    config.headers["x-access-token"] = token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
