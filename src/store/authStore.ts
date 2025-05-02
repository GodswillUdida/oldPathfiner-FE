import { create } from "zustand";
import axios from "axios"; // Custom axios setup

export type Role = "USER" | "INSTRUCTOR" | "ADMIN";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  fetchUser: () => Promise<void>;
  login: () => void;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,

  fetchUser: async () => {
    try {
      const res = await axios.get("/auth/me");
      set({ user: res.data.user, isLoading: false });
    } catch {
      set({ user: null, isLoading: false });
    }
  },

  login: () => {
    window.location.href = "/api/auth/google"; // Redirect to OAuth
  },

  logout: async () => {
    await axios.post("/auth/logout");
    set({ user: null });
  },
}));
