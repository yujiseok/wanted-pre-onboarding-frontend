import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
