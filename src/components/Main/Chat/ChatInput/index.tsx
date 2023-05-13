import { FC } from "react";
import { Button, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconSend } from "@tabler/icons-react";
import { fetchSendMessage } from "../../../../api/message.api";
import { useAuthStore } from "../../../../store/auth.store";
import { useChatStore } from "../../../../store/chat.store";

export const ChatInput: FC = () => {
  const [text, setText] = useInputState("");
  const { idInstance, apiTokenInstance } = useAuthStore((state) => state.user);
  const { activeChat, setAddMessage } = useChatStore((state) => state);

  const handleSend = async () => {
    const infoMessage = {
      chatId: activeChat,
      message: text,
    };
    console.log(activeChat);
    await fetchSendMessage(idInstance, apiTokenInstance, infoMessage)
      .then((response) =>
        setAddMessage({
          chatId: activeChat,
          idMessage: response.data.idMessage,
          sendFrom: "You",
          message: text,
        })
      )
      .catch((e) => console.log(e));
    if (text.length) {
      setText("");
    }
  };

  const keydown = (e: any) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };

  return (
    <>
      <TextInput
        w="90%"
        value={text}
        onChange={setText}
        placeholder="Напишите сообщение"
        size="md"
        radius="md"
        onKeyDown={keydown}
      />
      <Button
        w="2.5rem"
        h="2.5rem"
        radius="1.5rem"
        p="0"
        onClick={() => handleSend()}
        children={<IconSend color="white" size={20} />}
      />
    </>
  );
};
