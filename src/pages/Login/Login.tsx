import styles from "./Login.module.css";

import { Button, Card, PasswordInput, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useLogin from "../../services/auth/useLogin";
import { useAuthStore } from "../../stores/useAuthStore";

export default function Login() {
  const { fazerLogin, isLoading } = useLogin();
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const form = useForm({
    initialValues: {
      usuario: "",
      senha: "",
    },
  });

  const login = async ({
    usuario,
    senha,
  }: {
    usuario: string;
    senha: string;
  }) => {
    try {
      const data = await fazerLogin({ usuario, senha });

      authStore.addLoginInfo({
        token: data.data.token,
      });

      navigate("/");
      showNotification({
        title: "Ok",
        message: "Login efetuado com sucesso!",
        color: "green",
      });
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error?.response?.data?.message
          : "Ocorreu um erro ao fazer login. Por favor, tente novamente";
      showNotification({
        title: "Erro",
        message,
        color: "red",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Consultec</h1>
        <Text color="#757578">
          Contabilidade Profissional, Soluções Sólidas!
        </Text>
      </div>
      <div className={styles.card}>
        <Card radius="md" shadow="sm" p="lg">
          <form onSubmit={form.onSubmit(login)}>
            <TextInput
              withAsterisk
              label="Usuário"
              placeholder="example@mail.com"
              {...form.getInputProps("usuario")}
            />
            <PasswordInput
              placeholder="Digite a sua senha"
              label="Senha"
              withAsterisk
              {...form.getInputProps("senha")}
            />
            <Button
              gradient={{ from: "#2256f2", to: "#4674FF" }}
              fullWidth
              mt="md"
              radius="md"
              loading={isLoading}
              type="submit"
            >
              Entrar
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
