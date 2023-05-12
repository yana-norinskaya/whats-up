import { Group, Stack } from "@mantine/core";
import { HeaderChat } from "../HeaderChat";
import ChatBox from "./ChatBox";
import Message from "./Message";
import ChatInput from "./ChatInput";

export const Chat = () => {
  return (
    <Stack w="70%" h="100%" spacing="0">
      <HeaderChat />
      <ChatBox>
        <Message message="hi" isYou={true} senderName={"f"} />
      </ChatBox>
      <Group position="center" p="sm" spacing="md" bg="gray.1">
        <ChatInput />
      </Group>
    </Stack>
  );
};
