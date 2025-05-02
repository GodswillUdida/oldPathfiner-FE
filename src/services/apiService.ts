import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Automatically attach Authorization token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Fetch videos using React Query
export const useVideos = () =>
  useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const { data } = await api.get("/api/videos");
      return data;
    },
  });

// Fetch users
export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await api.get("/api/auth/users");
      return data;
    },
  });

// Fetch statistics
export const useStats = () =>
  useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const { data } = await api.get("/api/stats");
      return data;
    },
  });

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
