import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

const token = localStorage.getItem("tokenContactsApp");

export const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export const apiAuthenticated = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});
