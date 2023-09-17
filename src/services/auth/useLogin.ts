import { useMutation } from "@tanstack/react-query";
import api from "../api";

type PropsData = {
  login: string;
  password: string;
};

export type Response = {
  access_token: string;
	user_id: string;
};

function useLogin() {
  const { mutateAsync: fazerLogin, isLoading } = useMutation(
    (loginData: PropsData) => api.post<Response>("/session/login", loginData)
  );
  return { fazerLogin, isLoading };
}

export default useLogin;
