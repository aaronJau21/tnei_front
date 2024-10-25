import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthStore {
  token: string;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: "",
        setToken: (token) => set({ token }),
      }),
      {
        name: "token",
      }
    )
  )
);

export default useAuthStore;
