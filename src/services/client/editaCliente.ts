import api from "../api";
import { Clientes } from "./Clientes";

const editaCliente = async (cliente: Omit<Clientes, "_id" >) => {
  const { data } = await api.put<Clientes>(`/client/${cliente.cgc}`, cliente);
  return data;
}

export default editaCliente