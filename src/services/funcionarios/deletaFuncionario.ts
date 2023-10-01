import api from "../api";

const deleteFuncionario = async (cgc: string) => {
  await api.delete(`/employees/${cgc}`);
};

export default deleteFuncionario;
