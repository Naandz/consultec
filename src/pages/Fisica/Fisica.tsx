import { useQuery } from "@tanstack/react-query";
import listaClientes from "../../services/client/listaClientes";
import { DataTable } from "mantine-datatable";

export default function Fisica() {
  const { data } = useQuery({
    queryKey: ["client"],
    queryFn: async () => listaClientes(),
  });

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
        idAccessor="_id"
        columns={[
          { accessor: "apelido", title: "Apelido", textAlignment: "center" },
          {
            accessor: "apelido",
            title: "Apelido",
            textAlignment: "center",
          },
          { accessor: "cgc", title: "CPF", textAlignment: "center" },
          { accessor: "telefone", title: "Tell", textAlignment: "center" },
          { accessor: "contrato", title: "Contrato", textAlignment: "center" },
        ]}
        noRecordsText="Nenhum registro encontrado!"
      />
    </div>
  );
}
