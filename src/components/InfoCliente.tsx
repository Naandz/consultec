import { Divider, Flex, Text, Title } from "@mantine/core";
import style from "../pages/Juridica/ClienteJuridico.module.css";

interface InfoClienteProps {
  Contrato: string;
  Fantasia: string;
  Razao: string;
  Tel: string;
  Email: string;
  Cgc: string;
  Ramo: string;
  Cnae: string;
  Planos: string;
}
export default function InfoCliente(props: InfoClienteProps) {
  return (
    <div>
        {/* Informações do Clientes */}
        <Flex direction="column" className={style.dados}>
          <Title order={2} mb="xs" className={style.titulo}>
            Informações
          </Title>
          <Flex gap="xs">
            <Text className={style.destaque}>Contrato:</Text>
            <Text>{props.Contrato}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Fantasia:</Text>
            <Text>{props.Fantasia}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Razão Social:</Text>
            <Text>{props.Razao}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Telefone:</Text>
            <Text>{props.Tel}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>E-mail:</Text>
            <Text>{props.Email}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>CNPJ:</Text>
            <Text>{props.Cgc}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Ramo de Atividade:</Text>
            <Text>{props.Ramo}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>CNAE:</Text>
            <Text>{props.Cnae}</Text>
          </Flex>
          <Divider size="xs" />

          <Flex gap="xs">
            <Text className={style.destaque}>Planos:</Text>
            <Text>{props.Planos}</Text>
          </Flex>

          <Divider size="xs" />
        </Flex>
    </div>
  );
}
