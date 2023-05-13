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

function unique(arr: IMessages[]) {
  var a = arr;
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i].idMessage === a[j].idMessage) a.splice(j--, 1);
    }
  }

  return a;
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
  }))
);
