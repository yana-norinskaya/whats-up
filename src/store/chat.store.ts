import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IMessages {
  chatId: string;
  idMessage: string;
  sendFrom: string;
  message: string;
}

interface IChatState {
  activeChat: string;
  messages: IMessages[];
  setActiveChat: (id: string) => void;
  setAddMessage: (message: IMessages) => void;
}

export const useChatStore = create<IChatState>()(
  devtools((set) => ({
    activeChat: "",
    messages: [],
    setActiveChat: (id: string) => set({ activeChat: id }),
    setAddMessage: (message: IMessages | null) =>
      set((state) => ({
        messages: message ? [...state.messages, message] : [...state.messages],
      })),
  }))
);
