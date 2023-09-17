import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface authStore {
  access_token: string;
  user_id: string;
  addLoginInfo: (info: { access_token: string; user_id: string }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<authStore>(
    (set) => ({
      access_token: "",
      user_id: "",

      addLoginInfo({
        access_token,
        user_id,
      }: {
        access_token: string;
        user_id: string;
      }) {
        set({ access_token, user_id });
      },
      logout() {
        set({ access_token: "", user_id: "" });
      },
    }),
    {
      name: "@consultech/auth",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
