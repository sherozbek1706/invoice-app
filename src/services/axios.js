import axios from "axios";
import { API_URL } from "../const";
const ACCESS_TOKEN = localStorage.getItem("token") || "";
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
