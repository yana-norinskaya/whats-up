import { Flex, TextInput } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconSend } from "@tabler/icons-react";

const ChatInput = () => {
  const [text, setText] = useInputState("");

  const handleSend = () => {
    if (text.length) {
      setText("");
    }
  };

  const keydown = (e: any) => {
    if (e.keyCode === 13) {
      handleSend();
    }
  };

  return (
    <>
      <TextInput
        w="90%"
        value={text}
        onChange={setText}
        placeholder="drr"
        size="md"
        radius="md"
        onKeyDown={keydown}
      />
      <Flex
        align="center"
        justify="center"
        bg="blue.5"
        w="2.5rem"
        h="2.5rem"
        onClick={handleSend}
        sx={{
          borderRadius: "1.5rem",
          cursor: "pointer",
        }}
      >
        <IconSend color="white" size={20} />
      </Flex>
    </>
  );
};

export default ChatInput;
