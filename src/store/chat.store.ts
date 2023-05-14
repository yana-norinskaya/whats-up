import { create } from "zustand";
import { devtools } from "zustand/middleware";

function unique(arr: IMessages[]) {
  let a = arr;
  for (let i = 0; i < a.length; ++i) {
    for (let j = i + 1; j < a.length; ++j) {
      if (a[i].idMessage === a[j].idMessage) a.splice(j--, 1);
    }
  }
  return a;
}

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
  deleteDialog: (id: string) => void;
  clearChat: () => void;
}

export const useChatStore = create<IChatState>()(
  devtools((set) => ({
    activeChat: "",
    messages: [],
    setActiveChat: (id: string) => set({ activeChat: id }),
    setAddMessage: (message: IMessages | null) =>
      set((state) => ({
        messages: message
          ? unique([...state.messages, message])
          : unique([...state.messages]),
      })),
    deleteDialog: (id: string) =>
      set((state) => ({
        messages: state.messages.filter((item) => item.chatId !== id),
      })),
    clearChat: () => set({ activeChat: "", messages: [] }),
  }))
);
