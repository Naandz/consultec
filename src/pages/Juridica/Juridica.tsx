import { useQuery } from "@tanstack/react-query";
import listaClientes from "../../services/client/listaClientes";
import { DataTable } from "mantine-datatable";

export default function Juridica() {
  const { data, isFetching, isRefetching } = useQuery({
    queryKey: ["client"],
    queryFn: async () => listaClientes(),
  });

  return (
    <div>
      <DataTable
        withBorder
        shadow="sm"
        striped
        highlightOnHover
        horizontalSpacing="xs"
        verticalAlignment="center"
        fetching={isFetching || isRefetching}
        records={data}
        columns={[
          { accessor: "numero", title: "Nº", textAlignment: "center" },
          { accessor: "fantasia", title: "Fantasia", textAlignment: "center" },
          {
            accessor: "razaosocial",
            title: "Razão Social",
            textAlignment: "center",
          },
          { accessor: "contrato", title: "Contrato", textAlignment: "center" },
        ]}
        noRecordsText="Nenhum registro encontrado!"
      />
    </div>
  );
}
