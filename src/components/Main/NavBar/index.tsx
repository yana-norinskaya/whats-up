import { Navbar, Stack, Text, Avatar, Group } from "@mantine/core";
import { useContactStore } from "../../../store/contact.store";
import { Header } from "./Header";
import { useChatStore } from "../../../store/chat.store";

export const NavbarMain = () => {
  const contacts = useContactStore((state) => state.contacts);
  const { activeChat, setActiveChat } = useChatStore((state) => state);
  return (
    <Navbar w="30%">
      <Header />
      <Stack>
        {contacts?.map((info) => (
          <Group
            h="4rem"
            w="100%"
            p="md"
            bg={activeChat === info.chatId ? "lime.3" : "white"}
            sx={{
              boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
              cursor: "pointer",
            }}
            onClick={() => setActiveChat(info.chatId)}
          >
            <Avatar src={info.avatar} alt="avatar" radius="xl" />
            <Text fz="lg" fw={700} c="dark.4" children={info.name} />
          </Group>
        ))}
      </Stack>
    </Navbar>
  );
};
