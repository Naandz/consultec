import api from "../api";

import { Clientes } from "./Clientes";

const listaClientes = async () => {
  const { data } = await api.get<Clientes[]>("/client?tipopessoa=F");
  return data;
};

export default listaClientes;
