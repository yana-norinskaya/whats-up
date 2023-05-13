import { useChatStore } from "../store/chat.store";
import { useCallback, useEffect } from "react";
import { fetchDeleteNotification, fetchGetMessage } from "../api/message.api";
import { useAuthStore } from "../store/auth.store";

export const useFormGetMessage = () => {
  const { messages, setAddMessage } = useChatStore((state) => state);
  const { idInstance, apiTokenInstance } = useAuthStore((state) => state.user);

  const getMessage = useCallback(async () => {
    await fetchGetMessage(idInstance, apiTokenInstance)
      .then((response) => {
        if (response.data !== null && response.data !== undefined) {
          if (
            messages.every(
              (item) => item.idMessage !== response.data?.body.idMessage
            )
          ) {
            const { senderData, idMessage, messageData } = response.data?.body;
            setAddMessage({
              chatId: senderData.chatId,
              idMessage: idMessage,
              sendFrom: senderData.senderName,
              message: messageData.textMessageData.textMessage,
            });

            return response.data.receiptId;
          }
        }
      })
      .then((id) => {
        if (id !== undefined) {
          fetchDeleteNotification(idInstance, apiTokenInstance, id);
        }
      });
  }, [messages, setAddMessage, apiTokenInstance, idInstance]);

  useEffect(() => {
    getMessage();
  }, [getMessage]);
};
