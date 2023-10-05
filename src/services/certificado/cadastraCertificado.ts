import api from "../api";

import { Certificado } from "./Certificado";

const cadastraCertificado = async (certificado: Certificado) => {
  const { data } = await api.post<Certificado>(`/certificate`, certificado);
  return data;
};

export default cadastraCertificado;
