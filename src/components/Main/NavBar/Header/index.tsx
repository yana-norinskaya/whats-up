import { Group, Input, Button } from "@mantine/core";
import { useFormGetContact } from "../../../../hooks/useFormGetContact";
import { useAuthStore } from "../../../../store/auth.store";
import { useNavigate } from "react-router";

export const Header = () => {
  const { form, handleSubmit, loading } = useFormGetContact();
  const navigate = useNavigate();
  const { clear } = useAuthStore();

  const handleLogOut = () => {
    clear();
    navigate("/login");
  };

  return (
    <Group bg="gray.1" w="100%" h={60} p="md" position="apart">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group>
          <Input {...form.getInputProps("tel")} />
          <Button loading={loading} type="submit" children="Написать" />
        </Group>
      </form>
      <Button children="выйти" onClick={handleLogOut} />
    </Group>
  );
};
