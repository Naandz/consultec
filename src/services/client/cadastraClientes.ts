import api from "../api";
import { Clientes } from "./Clientes";

const cadastraCliente = async (cliente: Omit<Clientes, "_id" >) => {
  const { data } = await api.post<Clientes>("/client/juridico", cliente);
  return data;
};

export default cadastraCliente;
