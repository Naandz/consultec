import { useMutation } from "@tanstack/react-query";
import api from "../api";

type PropsData = {
  usuario: string;
  senha: string;
};

export type Response = {
  token: string;
};

function useLogin() {
  const { mutateAsync: fazerLogin, isLoading } = useMutation(
    (loginData: PropsData) => api.post<Response>("/session/login", loginData)
  );
  return { fazerLogin, isLoading };
}

export default useLogin;
