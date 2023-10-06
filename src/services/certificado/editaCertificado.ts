import api from "../api";

import { Certificado } from "./Certificado";

const editaCertificado = async (
  id: string | undefined,
  certificado: Omit<Certificado, "_id" | "idcontador" | "idcliente">
) => {
  const { data } = await api.put<Certificado>(
    `/certificate/${id}`,
    certificado
  );
  return data;
};

export default editaCertificado;
