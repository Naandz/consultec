import api from "../api";
import ApiResponse from "../apiResponse";
import { Clientes } from "./Clientes";

const listaClientes = async () => {
  const { data } = await api.get<Clientes[]>("/client");
  return data;
};

export default listaClientes;
