import api from "../api";

import { Clientes } from "./Clientes";

const listaClientes = async () => {
  const { data } = await api.get<Clientes[]>("/client?tipopessoa=J");
  return data;
};

export default listaClientes;
