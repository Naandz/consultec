import api from "../api";
import { Funcionarios } from "./Funcionarios";

const cadastraFuncionario = async (funcionario: Omit<Funcionarios, "cnpjempregador" >) => {
  const { data } = await api.post<Funcionarios>("/employees", funcionario);
  return data;
}

export default cadastraFuncionario