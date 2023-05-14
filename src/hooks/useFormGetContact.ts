import { useForm } from "@mantine/form";
import { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { fetchCheckWhatsapp, fetchContactInfo } from "../api/chat.api";
import { useContactStore } from "../store/contact.store";
import { useChatStore } from "../store/chat.store";

interface IValueForm {
  tel: string;
}

export const useFormGetContact = () => {
  const [loading, setLoading] = useState(false);
  const { setContact, contacts } = useContactStore((state) => state);
  const { idInstance, apiTokenInstance } = useAuthStore((state) => state.user);
  const { setActiveChat } = useChatStore((state) => state);
  const [error, setError] = useState(false);

  const form = useForm({
    initialValues: {
      tel: "",
    },
  });

  const handleSubmit = async (value: IValueForm) => {
    setLoading(true);
    const regex = /[^0-9,.]/g;
    let val = {
      chatId: `${value.tel.replace(regex, "")}@c.us`,
    };

    let valueForCheckWhatsapp = {
      phoneNumber: Number(value.tel.replace(regex, "")),
    };

    await fetchCheckWhatsapp(
      idInstance,
      apiTokenInstance,
      valueForCheckWhatsapp
    )
      .then((response) => {
        return response.data.existsWhatsapp;
      })
      .then(async (existsWhatsapp) => {
        if (existsWhatsapp) {
          await fetchContactInfo(idInstance, apiTokenInstance, val)
            .then((response) => {
              setError(false);
              if (
                contacts.every(
                  (contact) => contact.chatId !== response.data.chatId
                )
              ) {
                setActiveChat(response.data.chatId);
                setContact(response.data);
              } else {
                setActiveChat(response.data.chatId);
              }
            })
            .catch(() => setError(true));
        }
      })
      .catch(() => form.setFieldError("tel", "Tакого номера не существует"));
    form.reset();
    setLoading(false);
  };
  return { form, handleSubmit, loading, error };
};
