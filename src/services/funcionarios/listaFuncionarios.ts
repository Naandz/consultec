import api from "../api";
import { Funcionarios } from "./Funcionarios";

const listaFuncionarios = async (_id?: string) => {
  const { data } = await api.get<Funcionarios[]>(`/employees/${_id}`);
  return data;
};

export default listaFuncionarios