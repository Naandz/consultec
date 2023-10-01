import api from "../api";
import { Funcionarios } from "./Funcionarios";

const listaFuncionarios = async (cgc?: string) => {
  const { data } = await api.get<Funcionarios[]>(`/employees/${cgc}`);
  return data;
};

export default listaFuncionarios