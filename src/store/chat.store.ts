import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IChatState {
  activeChat: string;
  setActiveChat: (id: string) => void;
}

export const useChatStore = create<IChatState>()(
  devtools((set) => ({
    activeChat: "",
    setActiveChat: (id: string) => set({ activeChat: id }),
  }))
);
