import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { DataTable } from "mantine-datatable";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Acoes from "../Acoes";
import deleteFuncionario from "../../services/funcionarios/deletaFuncionario";
import listaFuncionarios from "../../services/funcionarios/listaFuncionarios";

export default function ListaFuncionarioJuridico() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isError, data, isFetching, isRefetching, refetch } = useQuery({
    queryKey: ["funcionario"],
    queryFn: async () => listaFuncionarios(id),
  });

  useEffect(() => {
    if (isError) {
      navigate("/juridica");
    }
  }, [isError, id]);

  const exclui = async (cpf: string) => {
    try {
      await deleteFuncionario(cpf);
      showNotification({
        title: "Ok",
        message: "Exclusão efetuada com sucesso!",
        color: "green",
      });
      refetch().catch(() => {});
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error?.response?.data?.message
          : "Ocorreu um erro ao excluir. Por favor, tente novamente";
      showNotification({
        title: "Erro",
        message,
        color: "red",
      });
    }
  };

  return (
    <div>
      <DataTable
        minHeight={132}
        withBorder
        shadow="sm"
        striped
        highlightOnHover
        horizontalSpacing="xs"
        verticalAlignment="center"
        records={data}
        fetching={isFetching || isRefetching}
        idAccessor="cpf"
        columns={[
          { accessor: "nome", title: "Nome", textAlignment: "center" },
          { accessor: "cpf", title: "CPF", textAlignment: "center" },
          {
            accessor: "rg",
            title: "RG",
            textAlignment: "center",
          },
          { accessor: "funcao", title: "Função", textAlignment: "center" },
          { accessor: "telefone", title: "Tell", textAlignment: "center" },
          {
            accessor: "",
            title: "Ações",
            textAlignment: "right",
            render: (data) => (
              <Acoes
                acaoDetalhar={() =>
                  navigate(`/detalha/funcionarios/${data.cpf}`)
                }
                acaoEditar={() => navigate(`/edita/funcionarios/${data.cpf}`)}
                acaoExcluir={() => exclui(data.cpf)}
              />
            ),
          },
        ]}
        noRecordsText="Nenhum registro encontrado!"
      />
    </div>
  );
}
