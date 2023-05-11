import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUser {
  wid: string;
  idInstance: string;
  apiTokenInstance: string;
}

interface IAuthState {
  user: IUser | null;
  setUser: (dataUser: IUser) => void;
  clear: () => void;
}

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (dataUser: IUser) => set({ user: dataUser }),
        clear: () =>
          set({
            user: null,
          }),
      }),
      {
        name: "whats-up",
      }
    )
  )
);
