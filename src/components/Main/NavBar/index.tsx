import { FC } from "react";
import { Navbar, Stack, Text, Avatar, Group } from "@mantine/core";
import { useContactStore } from "../../../store/contact.store";
import { Header } from "./Header";
import { useChatStore } from "../../../store/chat.store";
import { IconTrash } from "@tabler/icons-react";

export const NavbarMain: FC = () => {
  const { contacts, deleteContact } = useContactStore((state) => state);
  const { activeChat, setActiveChat } = useChatStore((state) => state);

  return (
    <Navbar w="30%" h="100%">
      <Header />
      <Stack>
        {contacts?.map(({ name, chatId, avatar }) => {
          const renderName = name ? name : parseInt(chatId);
          return (
            <Group
              key={chatId}
              h="4rem"
              w="100%"
              p="md"
              bg={activeChat === chatId ? "lime.0" : "gray.0"}
              position="apart"
              sx={(theme) => ({
                boxShadow:
                  activeChat === chatId
                    ? `4px 4px 4px 0px ${theme.colors.lime[8]}`
                    : `4px 4px 4px 0px ${theme.colors.dark[2]}`,
                cursor: "pointer",
                ":hover": {
                  boxShadow: `4px 4px 4px 0px ${theme.colors.lime[8]}`,
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
                onClick={() => deleteContact(chatId)}
              />
            </Group>
          );
        })}
      </Stack>
    </Navbar>
  );
};
