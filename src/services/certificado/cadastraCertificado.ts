import api from "../api";

import { Certificado } from "./Certificado";

const cadastraCertificado = async (
  idcontador: string,
  certificado: Pick<Certificado, "nome" | "senha" | "dtvalidade">
) => {
  const { data } = await api.post<Certificado>(
    `/certificate/${idcontador}`,
    certificado
  );
  return data;
};

export default cadastraCertificado;
