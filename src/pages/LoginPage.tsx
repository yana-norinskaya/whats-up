import { FC } from "react";
import { Flex, Card, Stack } from "@mantine/core";
import { LogIn } from "../components/LogIn";

export const LoginPage: FC = () => {
  return (
    <Flex h="100vh" bg="green.4" justify="center" align="center">
      <Card w={500} shadow="sm" padding="lg" radius="md" withBorder>
        <Stack>
          <LogIn />
        </Stack>
      </Card>
    </Flex>
  );
};
