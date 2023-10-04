import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { DataTable } from "mantine-datatable";
import { useNavigate } from "react-router-dom";
import Acoes from "../../components/Acoes";
import deleteClient from "../../services/client/deletaCliente";
import listaClientes from "../../services/client/listaClientes";

export default function Juridica() {
  const navigate = useNavigate();

  const { data, isFetching, isRefetching, refetch } = useQuery({
    queryKey: ["client"],
    queryFn: async () => listaClientes(),
  });

  const exclui = async (cgc: string) => {
    try {
      await deleteClient(cgc);
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
        idAccessor="_id"
        columns={[
          { accessor: "fantasia", title: "Fantasia", textAlignment: "center" },
          {
            accessor: "razaosocial",
            title: "Razão Social",
            textAlignment: "center",
          },
          { accessor: "cgc", title: "CNPJ", textAlignment: "center" },
          { accessor: "telefone", title: "Tell", textAlignment: "center" },
          { accessor: "contrato", title: "Contrato", textAlignment: "center" },
          {
            accessor: "",
            title: "Ações",
            textAlignment: "right",
            render: (data) => (
              <Acoes
                acaoDetalhar={() => navigate(`/cliente/juridico/${data._id}`)}
                acaoEditar={() => navigate(`/edita/${data._id}`)}
                acaoExcluir={() => exclui(data._id)}
              />
            ),
          },
        ]}
        noRecordsText="Nenhum registro encontrado!"
      />
    </div>
  );
}
