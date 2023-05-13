import { Group, Input, Button, useMantineTheme, Text } from "@mantine/core";
import { useFormGetContact } from "../../../../hooks/useFormGetContact";
import { useAuthStore } from "../../../../store/auth.store";
import { useNavigate } from "react-router";
import { IconLogout } from "@tabler/icons-react";
import { FC, useState } from "react";
import { IMaskInput } from "react-imask";

export const Header: FC = () => {
  const { form, handleSubmit, loading, error } = useFormGetContact();
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const { clear } = useAuthStore();
  const theme = useMantineTheme();

  const handleLogOut = () => {
    // eslint-disable-next-line no-restricted-globals
    let isLogOut = confirm("Вы действительно хотите выйти?");
    if (isLogOut) {
      clear();
      navigate("/login");
    }
  };

  return (
    <>
      <Group bg="gray.1" w="100%" mih={60} p="sm" position="apart">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Group>
            <Input
              required
              component={IMaskInput}
              mask="+7 (000) 000-00-00"
              placeholder="Введите номер телефон"
              {...form.getInputProps("tel")}
            />

            <Button loading={loading} type="submit" children="Создать чат" />
          </Group>
        </form>

        <IconLogout
          color={hover ? theme.colors.dark[3] : theme.colors.dark[2]}
          onClick={handleLogOut}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ cursor: "pointer" }}
        />
      </Group>
      {error && (
        <Text c="red.6" ta="center" fw={600} children="Что-то пошло не так" />
      )}
    </>
  );
};
