import api from "../api";

import { Certificado } from "./Certificado";

const listaCertificadoById = async (id?: string) => {
  const { data } = await api.get<Certificado[]>(
    `/clients/certificate/${id}`
  );
  return data;
};

export default listaCertificadoById;
