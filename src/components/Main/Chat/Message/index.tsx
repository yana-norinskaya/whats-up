import { FC } from "react";
import { Flex, Stack, Text } from "@mantine/core";

interface IMessage {
  message: string;
  isYou: boolean;
}

export const Message: FC<IMessage> = ({ message, isYou }) => (
  <Flex
    direction={isYou ? "row-reverse" : "row"}
    gap="sm"
    maw="full"
    align="start"
  >
    <Stack
      spacing={0}
      sx={(theme) => ({
        background: `${isYou ? theme.colors.lime[3] : theme.colors.gray[0]}`,
        width: "10rem",
        color: theme.colors.gray[7],
        boxShadow:
          "0px 4px 10px rgba(0, 0, 0, 0.06), 0px -4px 10px rgba(0, 0, 0, 0.03)",
        fontSize: "0.9rem",
        padding: "0.6rem 0.8rem",
        borderRadius: isYou ? "1rem 0 1rem 1rem" : "0 1rem 1rem 1rem",
      })}
    >
      <Text fz="0.8rem" fw={700} children={message} />
    </Stack>
  </Flex>
);
