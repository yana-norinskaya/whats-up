import { Avatar, Group, Text } from "@mantine/core";
import { useContactStore } from "../../../store/contact.store";
import { useChatStore } from "../../../store/chat.store";
import { useCallback, FC } from "react";

export const HeaderChat: FC = () => {
  const { contacts } = useContactStore((state) => state);
  const { activeChat } = useChatStore((state) => state);

  const getCurrentContact = useCallback(() => {
    return contacts.filter((item) => item.chatId === activeChat)[0];
  }, [activeChat, contacts]);

  return (
    <Group bg="gray.1" w="100%" h={60} p="md">
      {activeChat && getCurrentContact() ? (
        <>
          <Avatar src={getCurrentContact().avatar} alt="avatar" radius="xl" />
          <Text
            fw={600}
            c="dark.3"
            children={
              getCurrentContact().name
                ? getCurrentContact().name
                : parseInt(getCurrentContact().chatId)
            }
          />
        </>
      ) : null}
    </Group>
  );
};
