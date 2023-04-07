import { Cookies } from "react-cookie";

export const getCookie = (name: string) => {
  const cookies = new Cookies();
  return cookies.get(name) || null;
};

export const clearCookie = (name: string) => {
  const cookies = new Cookies();
  return cookies.remove(name);
};
