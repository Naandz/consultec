import { Flex, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "mantine-datatable";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EnderecoCliente from "../../components/EnderecoCliente";
import ListaFuncionarioJuridico from "../../components/Funcionarios/ListaFuncionarioJuridico";
import ModalCadFuncionarios from "../../components/Funcionarios/ModalCadFuncionarios";
import InfoClienteF from "../../components/InfoClienteF";
import ModalCertificado from "../../components/ModalCadCertificado";
import listaFuncionarios from "../../services/funcionarios/listaFuncionarios";
import style from "./ClienteFisica.module.css";

export default function ClienteJuridico() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { isError, data, isFetching, isRefetching } = useQuery({
    queryKey: ["funcionario"],
    queryFn: async () => listaFuncionarios(id),
  });

  useEffect(() => {
    if (isError) {
      navigate("/juridica");
    }
  }, [isError, id]);
  return (
    <div>
      <Flex
        mt="xs"
        wrap="wrap"
        justify="space-between"
        className={style.conteudo}
      >
        <InfoClienteF
          Contrato="Ativo"
          Fantasia="João"
          Razao="João da Silva"
          Tel="(11) 5555-5555"
          Email="joao@email.com"
          Cgc="123.456.789-00"
          Ramo="Comércio de Eletrônicos"
          Cnae="47.11-3/02"
          Planos="Fiscal, Contábil e Pessoal"
        />
        <EnderecoCliente
          Logradouro="Rua das Flores"
          Numero="123"
          Bairro="Bairro Central"
          Cidade="Cidade Grande"
          Estado="SP"
          Cep="12345-678"
          Pais="Brasil"
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
            records={data}
            fetching={isFetching || isRefetching}
            idAccessor="cpf"
            columns={[
              { accessor: "cpf", title: "Nome", textAlignment: "center" },
              { accessor: "funcao", title: "Senha", textAlignment: "center" },
              {
                accessor: "telefone",
                title: "Validade",
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
            <ModalCertificado />
          </Flex>
        </Flex>
        {/* Lista de Funcionários */}
        <Flex direction="column" className={style.funcionarios}>
          <Flex justify="center" mb="xs">
            <Title order={2} className={style.titulo}>
              Funcionários
            </Title>
          </Flex>
          <ListaFuncionarioJuridico />
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
