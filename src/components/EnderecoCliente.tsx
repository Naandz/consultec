import { Divider, Flex, Text, Title } from "@mantine/core";
import style from "../pages/Juridica/ClienteJuridico.module.css";

interface EnderecoCliente {
  Logradouro: string;
  Numero: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
  Cep: string;
  Pais: string;
}
export default function EnderecoCliente(props: EnderecoCliente) {
  return (
    <div>
        {/* Informações de Endereço */}
        <Flex direction="column" className={style.dados}>
          <Title order={2} mb="xs" className={style.titulo}>
            Endereço
          </Title>
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Logradouro:</Text>
            <Text>{props.Logradouro}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Número:</Text>
            <Text>{props.Numero}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Bairro:</Text>
            <Text>{props.Bairro}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Cidade:</Text>
            <Text>{props.Cidade}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>Estado:</Text>
            <Text>{props.Estado}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>CEP:</Text>
            <Text>{props.Cep}</Text>
          </Flex>
          <Divider size="xs" />
          <Flex gap="xs" className={style.informacoes}>
            <Text className={style.destaque}>País:</Text>
            <Text>{props.Pais}</Text>
          </Flex>
          <Divider size="xs" />
        </Flex>
    </div>
  );
}
