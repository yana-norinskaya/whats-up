import { Flex, Stack, Text } from "@mantine/core";

interface IMessage {
  message: string;
  senderName: string;
  isYou: boolean;
}

const Message = (props: IMessage) => (
  <Flex
    direction={props.isYou ? "row-reverse" : "row"}
    gap="sm"
    maw="full"
    align="start"
  >
    <Stack
      spacing={0}
      key={"message"}
      sx={(theme) => ({
        background: theme.colors.lime[3],
        width: "10rem",
        color: theme.colors.gray[7],
        boxShadow:
          "0px 4px 10px rgba(0, 0, 0, 0.06), 0px -4px 10px rgba(0, 0, 0, 0.03)",
        fontSize: "0.9rem",
        padding: "0.6rem 0.8rem",
        borderRadius: props.isYou ? "1rem 0 1rem 1rem" : "0 1rem 1rem 1rem",
      })}
    >
      <Text fz="0.8rem" fw={700} children={props.message} />
    </Stack>
  </Flex>
);

export default Message;
