import { Button, Flex, Modal, Text, Divider } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import style from "./ModalFuncionarios.module.css";

interface InfoFucionarioProp {
  Nome: string;
  Cpf: string;
  Rg: string;
  Pis: string;
  Mae: string;
  Pai: string;
  Nascimento: string;
  Tel: string;
  Cargo: string;
  Funcao: string;
  Logradouro: string;
  Numero: string;
  Cidade: string;
  Estado: string;
  Cep: string;
  Pais: string;
  Ativo: string;
  Inativo?: string;
}

export default function ModalFuncionarios(props: InfoFucionarioProp) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <div>
      <Button className="botao" type="submit" onClick={open}>
        TESTE Info Funcionários
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Informações do funcionário"
        size="sm"
        fullScreen={isMobile}
        
      >
        <Flex gap="xs" justify='ce'>
          <Text className={style.destaque}>Nome:</Text>
          <Text>{props.Nome}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>CPF:</Text>
          <Text>{props.Cpf}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>RG:</Text>
          <Text>{props.Rg}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>PIS:</Text>
          <Text>{props.Pis}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Mãe:</Text>
          <Text>{props.Mae}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Pai:</Text>
          <Text>{props.Pai}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Nascimento:</Text>
          <Text>{props.Nascimento}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Telefone:</Text>
          <Text>{props.Tel}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Cargo:</Text>
          <Text>{props.Cargo}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Função:</Text>
          <Text>{props.Funcao}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Logradouro:</Text>
          <Text>{props.Logradouro}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Número:</Text>
          <Text>{props.Numero}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Cidade:</Text>
          <Text>{props.Cidade}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Estado:</Text>
          <Text>{props.Estado}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>CEP:</Text>
          <Text>{props.Cep}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>País:</Text>
          <Text>{props.Pais}</Text>
        </Flex>
        <Divider size="xs" />
        <Flex gap="xs">
          <Text className={style.destaque}>Ativo:</Text>
          <Text>{props.Ativo}</Text>
        </Flex>
        <Divider size="xs" />
        {props.Inativo !== undefined && (
          <div>
            <Flex gap="xs">
              <Text className={style.destaque}>Inativo:</Text>
              <Text>{props.Inativo}</Text>
            </Flex>
            <Divider size="xs" />
          </div>
        )}
      </Modal>
    </div>
  );
}
