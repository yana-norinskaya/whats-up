import { ScrollArea, Stack } from "@mantine/core";
import { FC, RefObject, PropsWithChildren } from "react";

interface IChatBox extends PropsWithChildren {
  viewport: RefObject<HTMLDivElement>;
}

export const ChatBox: FC<IChatBox> = ({ children, viewport }) => (
  <ScrollArea
    bg="blue.3"
    p="md"
    offsetScrollbars
    viewportRef={viewport}
    h="100%"
    w="100%"
    pb="xl"
    variant="outline"
  >
    <Stack spacing="sm">{children}</Stack>
  </ScrollArea>
);
