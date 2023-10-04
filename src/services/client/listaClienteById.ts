import api from "../api";

import { Clientes } from "./Clientes";

const listaClienteById = async (_id: string) => {
  const { data } = await api.get<Clientes>(`/client/${_id}`);
  return data;
};

export default listaClienteById;
