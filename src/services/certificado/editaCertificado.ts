import api from "../api";

import { Certificado } from "./Certificado";

const editaCertificado = async (certificado: Omit<Certificado, "_id" >) => {
    const { data } = await api.put<Certificado>(`/certificado/${certificado.idcliente}`, certificado);
    return data;
}

export default editaCertificado;