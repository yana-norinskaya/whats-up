import { Group } from "@mantine/core";
import { NavbarMain } from "../components/Main/NavBar";
import { Chat } from "../components/Main/Chat";
export const MainPage = () => {
  return (
    <Group h="100vh" grow spacing="0">
      <NavbarMain />
      <Chat />
    </Group>
  );
};
