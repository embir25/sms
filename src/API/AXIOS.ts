import axios from "axios";
export const API_BASE_URL = "http://localhost:3000/api";
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosInstance;