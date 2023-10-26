/*
 * @Author: fantiga
 * @Date: 2023-07-26 23:00:26
 * @LastEditTime: 2023-10-26 20:34:43
 * @LastEditors: fantiga
 * @FilePath: /kei-tutorial/client/src/utils/axios.ts
 */

import axios from "axios";

// const url = window.location.origin + "/api";
const url = "https://web-service-lc4s.onrender.com" + "/api";
axios.defaults.baseURL = url;
axios.defaults.withCredentials = false;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export default axios;

type Partial<T> = {
  [P in keyof T]?: T[P];
};

export function formatFormUrlencoded<T>(obj: Partial<T>): string {
  const res: string[] = [];
  for (const k in obj) {
    res.push(`${k}=${obj[k] || ""}`);
  }
  return res.join("&");
}
