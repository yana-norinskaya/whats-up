import { FC } from "react";
import { TextInput, Button, Group } from "@mantine/core";
import { useFormLogin } from "../../hooks/useFormLogin";

export const LogIn: FC = () => {
  const { form, handleSubmit, loading } = useFormLogin();

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        pb="sm"
        withAsterisk
        label="ID Instance"
        placeholder="Введите данные"
        required
        {...form.getInputProps("idInstance")}
      />
      <TextInput
        pb="sm"
        withAsterisk
        label="Token Api"
        placeholder="Введите данные"
        required
        {...form.getInputProps("apiTokenInstance")}
      />

      <Group position="right" mt="md">
        <Button loading={loading} type="submit">
          Вoйти
        </Button>
      </Group>
    </form>
  );
};
