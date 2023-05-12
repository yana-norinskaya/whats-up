import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IContactInfo {
  avatar: string;
  name: string;
  email: string;
  category: string;
  description: string;
  products: [];
  chatId: string;
  lastSeen: number | null;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  messageExpiration: number;
  muteExpiration: number | null;
}

interface IChatState {
  contacts: IContactInfo[];
  setContact: (contact: IContactInfo) => void;
}

export const useContactStore = create<IChatState>()(
  devtools((set) => ({
    contacts: [],
    setContact: (contact: IContactInfo) =>
      set((state) => ({ contacts: [...state.contacts, contact] })),
  }))
);
