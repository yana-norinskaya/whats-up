import { ScrollArea, Stack } from "@mantine/core";
import { FC, ReactNode } from "react";

const ChatBox: FC<{ children: ReactNode }> = ({ children }) => (
  <ScrollArea
    bg="lime.0"
    offsetScrollbars
    h="100%"
    w="100%"
    pb="xl"
    variant="outline"
    styles={() => ({
      overflow: "auto",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20px, rgba(0, 0, 0, 1) calc(100% - 20px), rgba(0, 0, 0, 0) 100%)",
      maskImage:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20px, rgba(0, 0, 0, 1) calc(100% - 20px), rgba(0, 0, 0, 0) 100%)",
      scrollbar: {
        '&[data-orientation="vertical"]': {
          ":hover": {
            backgroundColor: "transparent",
          },
        },
      },
    })}
  >
    <Stack spacing="sm">{children}</Stack>
  </ScrollArea>
);

export default ChatBox;
