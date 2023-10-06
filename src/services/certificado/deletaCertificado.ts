import api from "../api";

const deletaCertificado = async (_id: string) => {
  await api.delete(`/certificate/${_id}`);
};

export default deletaCertificado;
