import api from "../api";

import { Certificado } from "./Certificado";

const listaCertificadoById = async (idcliente?: string) => {
  const { data } = await api.get<Certificado[]>(
    `/clients/certificate/${idcliente}`
  );
  return data;
};

export default listaCertificadoById;
