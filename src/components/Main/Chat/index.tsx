import { Group, Stack } from "@mantine/core";
import { HeaderChat } from "../HeaderChat";
import { ChatBox } from "./ChatBox";
import { Message } from "./Message";
import { ChatInput } from "./ChatInput";
import { useChatStore } from "../../../store/chat.store";
import { useCallback, useRef, useEffect, FC } from "react";
import { useFormGetMessage } from "../../../hooks/useFormGetMessage";

export const Chat: FC = () => {
  const { messages, activeChat } = useChatStore((state) => state);

  const renderMessage = useCallback(() => {
    return messages.filter((message) => message.chatId === activeChat);
  }, [messages, activeChat]);

  useFormGetMessage();

  const viewport = useRef<HTMLDivElement>(null);
  const scrollToBottom = () =>
    viewport.current?.scrollTo({
      top: viewport.current.scrollHeight,
      behavior: "smooth",
    });

  useEffect(() => scrollToBottom, [messages]);

  return (
    <Stack w="70%" h="100%" spacing="0">
      <HeaderChat />
      <ChatBox viewport={viewport}>
        {renderMessage() &&
          renderMessage().map((message, i) => {
            const isYou = message.sendFrom === "You";
            return (
              <Message
                key={message.idMessage}
                message={message.message}
                isYou={isYou}
              />
            );
          })}
      </ChatBox>
      <Group position="center" p="sm" spacing="md" bg="gray.3">
        <ChatInput />
      </Group>
    </Stack>
  );
};
