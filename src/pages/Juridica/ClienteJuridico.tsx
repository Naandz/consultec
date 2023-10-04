import { Flex, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";
import { useNavigate, useParams } from "react-router-dom";
import EnderecoCliente from "../../components/EnderecoCliente";
import ListaFuncionarioJuridico from "../../components/Funcionarios/ListaFuncionarioJuridico";
import ModalCadFuncionarios from "../../components/Funcionarios/ModalCadFuncionarios";
import InfoClienteJ from "../../components/InfoClienteJ";
import ModalCertificado from "../../components/ModalCadCertificado";
import listaCertificadoById from "../../services/certificado/listaCertificadoById";
import listaClienteById from "../../services/client/listaClienteById";
import listaFuncionarios from "../../services/funcionarios/listaFuncionarios";
import style from "./ClienteJuridico.module.css";

export default function ClienteJuridico() {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const { data: Client } = useQuery({
    queryKey: ["client"],
    queryFn: async () => listaClienteById(id),
  });

  const {
    data: certificados,
    isFetching,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["certificados"],
    queryFn: async () => listaCertificadoById(id),
  });

  return (
    <div>
      <Flex
        mt="xs"
        wrap="wrap"
        justify="space-between"
        className={style.conteudo}
      >
        <InfoClienteJ
          Contrato={Client?.contrato}
          Fantasia={Client?.fantasia}
          // Razao={Client?.razao}
          Tel={Client?.telefone}
          Email={Client?.email}
          Cgc={Client?.cgc}
          Ramo={Client?.ramoatividade}
          Cnae={Client?.cnae}
          // Planos={Client?.planos}
        />
        <EnderecoCliente
          Logradouro={Client?.logradouro}
          Numero={Client?.numero}
          Bairro={Client?.bairro}
          Cidade={Client?.cidade}
          Estado={Client?.estado}
          Cep={Client?.cep}
          Pais={Client?.pais}
        />
        <Flex direction="column" align="center" className={style.certificados}>
          <Title order={2} mb="xs" className={style.titulo}>
            Certificados
          </Title>
          <DataTable
            minHeight={200}
            withBorder
            shadow="sm"
            striped
            highlightOnHover
            horizontalSpacing="xl"
            verticalAlignment="center"
            className={style.certificadosTable}
            fetching={isFetching || isRefetching}
            records={certificados || []}
            idAccessor="nome"
            columns={[
              { accessor: "nome", title: "Nome", textAlignment: "center" },
              { accessor: "senha", title: "Senha", textAlignment: "center" },
              {
                accessor: "descricao",
                title: "Descrição",
                textAlignment: "center",
              },
            ]}
            noRecordsText="Nenhum registro encontrado!"
          />

          <Flex
            direction="row"
            justify="flex-end"
            mt="xs"
            className={style.adicionarButton}
          >
            <ModalCertificado id={id} />
          </Flex>
        </Flex>
        {/* Lista de Funcionários */}
        <Flex direction="column" className={style.funcionarios}>
          <Flex justify="center" mb="xs">
            <Title order={2} className={style.titulo}>
              Funcionários
            </Title>
          </Flex>
          <ListaFuncionarioJuridico id={id} />
          <Flex
            direction="row"
            justify="flex-end"
            mt="xs"
            className={style.adicionarButton}
          >
            <ModalCadFuncionarios />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
