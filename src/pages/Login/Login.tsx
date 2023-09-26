import styles from "./Login.module.css";

import { Button, Card, PasswordInput, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useLogin from "../../services/auth/useLogin";
import { useAuthStore } from "../../stores/useAuthStore";

import Caderneta from "../../assets/Caderneta.svg";
import LogoMarca from "../../assets/LogoMarca.svg";

export default function Login() {
  const { fazerLogin, isLoading } = useLogin();
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const form = useForm({
    initialValues: {
      login: "",
      password: "",
    }, validate: {
      login: isNotEmpty('Informe um e-mail'),
      password: isNotEmpty('Informe a senha')
    }
  });

  const login = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    try {
      const data = await fazerLogin({ login, password });

      authStore.addLoginInfo({
        access_token: data.data.access_token,
        user_id: data.data.user_id,
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
    
        <img className={styles.logo} src={LogoMarca} alt="Logo" />
      
      <img className={styles.background} src={Caderneta} alt="Caderneta" />
      <div className={styles.card}>
        <Card radius="md" shadow="sm" p="lg" className={styles.cardComponent}>
          <form onSubmit={form.onSubmit(login)}>
            <TextInput
              withAsterisk
              label="Usuário"
              placeholder="example@mail.com"
              {...form.getInputProps("login")}
            />
            <PasswordInput
              placeholder="Digite a sua senha"
              label="Senha"
              withAsterisk
              {...form.getInputProps("password")}
            />

            <Button
              fullWidth
              mt="md"
              radius="md"
              loading={isLoading}
              type="submit"
              className={styles.botao}
            >
              Entrar
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
