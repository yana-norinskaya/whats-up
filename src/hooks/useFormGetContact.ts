import { useForm } from "@mantine/form";
import { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { fetchContactInfo } from "../api/chat.api";
import { useContactStore } from "../store/contact.store";
import { useChatStore } from "../store/chat.store";

export const useFormGetContact = () => {
  const [loading, setLoading] = useState(false);
  const setContact = useContactStore((state) => state.setContact);
  const user = useAuthStore((state) => state.user);
  const setActiveChat = useChatStore((state) => state.setActiveChat);

  const form = useForm({
    initialValues: {
      tel: "",
    },
  });

  const handleSubmit = async (value: { tel: string }) => {
    setLoading(true);
    let val = {
      chatId: value.tel + "@c.us",
    };
    await fetchContactInfo(user?.idInstance, user?.apiTokenInstance, val)
      .then((data) => {
        setContact(data.data);
        setActiveChat(data.data.chatId);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };
  return { form, handleSubmit, loading };
};
