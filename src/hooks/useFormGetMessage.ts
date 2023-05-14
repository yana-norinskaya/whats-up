import { useChatStore } from "../store/chat.store";
import { useCallback, useEffect } from "react";
import { fetchDeleteNotification, fetchGetMessage } from "../api/message.api";
import { useAuthStore } from "../store/auth.store";

export const useFormGetMessage = () => {
  const { setAddMessage } = useChatStore((state) => state);
  const { idInstance, apiTokenInstance } = useAuthStore((state) => state.user);

  const getMessage = useCallback(async () => {
    await fetchGetMessage(idInstance, apiTokenInstance)
      .then((response) => {
        if (response.data) {
          const { senderData, idMessage, messageData, typeWebhook } =
            response.data?.body;
          if (
            typeWebhook === "incomingMessageReceived" &&
            messageData.typeMessage === "textMessage"
          ) {
            setAddMessage({
              chatId: senderData.chatId,
              idMessage: idMessage,
              sendFrom: senderData.senderName,
              message: messageData.textMessageData.textMessage,
            });
          }

          return response.data.receiptId;
        }
      })
      .then((receiptId) => {
        if (receiptId) {
          fetchDeleteNotification(idInstance, apiTokenInstance, receiptId);
        }
      });
  }, [setAddMessage, apiTokenInstance, idInstance]);

  useEffect(() => {
    const timerId = setInterval(() => {
      getMessage();
    }, 1000);
    return () => clearInterval(timerId);
  }, [getMessage]);
};
