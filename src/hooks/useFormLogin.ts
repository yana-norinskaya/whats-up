import { useForm } from "@mantine/form";
import { fetchLogIn } from "../api/auth.api";
import { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

interface IValueLogIn {
  idInstance: string;
  apiTokenInstance: string;
}

export const useFormLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);
  const form = useForm({
    initialValues: {
      idInstance: "",
      apiTokenInstance: "",
    },
  });

  const handleSubmit = async (value: IValueLogIn) => {
    setLoading(true);
    const { idInstance, apiTokenInstance } = value;
    await fetchLogIn(idInstance, apiTokenInstance)
      .then((data) => {
        const response = {
          wid: data.data.wid,
          idInstance: idInstance,
          apiTokenInstance: apiTokenInstance,
        };
        setUser(response);
        navigate("/");
      })
      .catch(() => {
        form.setFieldError("idInstance", "Неверные данные");
        form.setFieldError("apiTokenInstance", "Неверные данные");
      });
    setLoading(false);
  };
  return { form, handleSubmit, loading };
};
