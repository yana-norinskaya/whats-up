import { useForm } from "@mantine/form";
import { fetchLogIn } from "../api/auth.api";
import { useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = async (value: {
    idInstance: string;
    apiTokenInstance: string;
  }) => {
    setLoading(true);
    await fetchLogIn(value.idInstance, value.apiTokenInstance)
      .then((data) => {
        const obg = {
          wid: data.data.wid,
          idInstance: value.idInstance,
          apiTokenInstance: value.apiTokenInstance,
        };
        setUser(obg);
        navigate("/");
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };
  return { form, handleSubmit, loading };
};
