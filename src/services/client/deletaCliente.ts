import api from "../api";

const deleteClient = async (cgc: string) => {
  await api.delete(`/client/${cgc}`);
};

export default deleteClient;
