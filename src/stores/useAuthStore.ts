import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface authStore {
  token: string;
  addLoginInfo: (info: { token: string }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<authStore>(
    (set) => ({
      token: "",

      addLoginInfo({ token }: { token: string }) {
        set({ token });
      },
      logout() {
        set({ token: "" });
      },
    }),
    {
      name: "@consultech/auth",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
