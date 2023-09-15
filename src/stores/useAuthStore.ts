import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface authStore {
  access_token: string;
  addLoginInfo: (info: { access_token: string }) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<authStore>(
    (set) => ({
      access_token: "",

      addLoginInfo({ access_token }: { access_token: string }) {
        set({ access_token });
      },
      logout() {
        set({ access_token: "" });
      },
    }),
    {
      name: "@consultech/auth",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
