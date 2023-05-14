import { FC } from "react";
import { Navbar, Stack, Text, Avatar, Group } from "@mantine/core";
import { useContactStore } from "../../../store/contact.store";
import { Header } from "./Header";
import { useChatStore } from "../../../store/chat.store";
import { IconTrash } from "@tabler/icons-react";

export const NavbarMain: FC = () => {
  const { contacts, deleteContact } = useContactStore((state) => state);
  const { activeChat, setActiveChat, deleteDialog } = useChatStore(
    (state) => state
  );
  return (
    <Navbar w="30%" h="100%">
      <Header />
      <Stack spacing="0.1rem">
        {contacts.map(({ name, chatId, avatar }) => {
          const renderName = name ? name : parseInt(chatId);
          const isActiveChat = activeChat === chatId;
          return (
            <Group
              key={chatId}
              h="4rem"
              w="100%"
              p="md"
              bg={isActiveChat ? "lime.0" : "gray.0"}
              position="apart"
              sx={(theme) => ({
                boxShadow: isActiveChat
                  ? `1px 1px 3px 0px ${theme.colors.lime[8]}`
                  : `1px 1px 3px 0px ${theme.colors.dark[2]}`,
                cursor: "pointer",
                transition: "0.3s all ease",
                ":hover": {
                  background: theme.colors.lime[0],
                },
              })}
              onClick={() => setActiveChat(chatId)}
            >
              <Group>
                <Avatar src={avatar} alt="avatar" radius="xl" />
                <Text fz="ьв" fw={700} c="dark.4" children={renderName} />
              </Group>
              <IconTrash
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteContact(chatId);
                  deleteDialog(chatId);
                }}
              />
            </Group>
          );
        })}
      </Stack>
    </Navbar>
  );
};
