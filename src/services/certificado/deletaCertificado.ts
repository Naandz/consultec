import api from "../api";

const deletaCertificado = async (_id: string) => {
  await api.delete(`/certificado/${_id}`);
};

export default deletaCertificado;
