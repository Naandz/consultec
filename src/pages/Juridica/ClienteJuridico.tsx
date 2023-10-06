import { Flex, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { DataTable } from "mantine-datatable";
import { useParams } from "react-router-dom";
import EnderecoCliente from "../../components/EnderecoCliente";
import ListaFuncionarioJuridico from "../../components/Funcionarios/ListaFuncionarioJuridico";
import InfoClienteJ from "../../components/InfoClienteJ";
import ModalCadCertificado from "../../components/ModalCadCertificado";
import ModalEditCertificado from "../../components/ModalEditCertificado";
import { Certificado } from "../../services/certificado/Certificado";
import deletaCertificado from "../../services/certificado/deletaCertificado";
import listaCertificadoById from "../../services/certificado/listaCertificadoById";
import listaClienteById from "../../services/client/listaClienteById";
import style from "./ClienteJuridico.module.css";

export default function ClienteJuridico() {
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

  const atualizaDados = () => {
    refetch();
  };

  const AbreModalCadastrarCertificado = (certificados: Certificado) => {
    modals.open({
      title: "Cadastrar certificado",
      children: (
        <ModalCadCertificado
          certificado={certificados}
          close={modals.closeAll}
          onSuccess={atualizaDados}
        />
      ),
    });
  };
  const AbreModalEditCertificado = (certificados: Certificado) =>
    modals.open({
      title: "Editar certificado",
      children: (
        <ModalEditCertificado
          certificado={certificados}
          close={modals.closeAll}
          onSuccess={atualizaDados}
        />
      ),
    });

  const excluirCertificado = (certificado: Certificado) =>
    modals.openConfirmModal({
      title: "Exclusão",
      children: (
        <Text size="sm">
          Você está prestes a excluir o chip de número "{certificado.nome}". Tem
          certeza disso?
        </Text>
      ),
      labels: { confirm: "Confirmar Exclusão", cancel: "Cancelar" },
      onConfirm: () => exclui(certificado._id),
    });

  const exclui = async (_id: string) => {
    try {
      await deletaCertificado(_id);
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
            idAccessor="_id"
            columns={[
              { accessor: "nome", title: "Nome", textAlignment: "center" },
              { accessor: "senha", title: "Senha", textAlignment: "center" },
              {
                accessor: "descricao",
                title: "Descrição",
                textAlignment: "center",
              },
              {
                accessor: "dtvalidade",
                title: "Validade",
                textAlignment: "center",
              },
            ]}
            noRecordsText="Nenhum registro encontrado!"
            rowContextMenu={{
              trigger: "click",
              items: (record) => [
                {
                  key: "Cadastrar",
                  onClick: () => AbreModalCadastrarCertificado(record),
                },
                {
                  key: "editar",
                  onClick: () => AbreModalEditCertificado(record),
                },
                {
                  key: "excluir",
                  onClick: () => excluirCertificado(record),
                },
              ],
            }}
          />

          <Flex
            direction="row"
            justify="flex-end"
            mt="xs"
            className={style.adicionarButton}
          >
            {/* <ModalCertificado id={id} /> */}
          </Flex>
        </Flex>
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
            {/* <ModalCadFuncionarios id={id} /> */}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
