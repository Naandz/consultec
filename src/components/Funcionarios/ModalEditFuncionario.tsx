import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
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

export default function ModaleEditFuncionario(props: InfoFucionarioProp) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");
  return (
    <div>
      <Button className="botao" type="submit" onClick={open}>
        TESTE EDITAR FUNCIONARIO
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Novo funcionário"
        size="xl"
        fullScreen={isMobile}
      >
        <Flex
          gap="xs"
          wrap="wrap"
          justify="space-around"
          direction={isMobile ? "column" : "row"}
        >
          <TextInput
            label="Nome"
            size="sm"
            placeholder="Informe o nome"
            defaultValue={props.Nome}
          />

          <TextInput
            label="CPF"
            size="sm"
            placeholder="000.000.000-00"
            defaultValue={props.Cpf}
          />

          <TextInput
            label="RG"
            size="sm"
            placeholder="00.000.000-0"
            defaultValue={props.Rg}
          />

          <TextInput
            label="PIS"
            size="sm"
            placeholder="000.00000.00-0"
            defaultValue={props.Pis}
          />

          <TextInput
            label="Mãe"
            size="sm"
            placeholder="Informe o nome da mãe"
            defaultValue={props.Mae}
          />

          <TextInput
            label="Pai"
            size="sm"
            placeholder="Informe o nome do pai"
            defaultValue={props.Pai}
          />

          <TextInput
            label=" Nascimento"
            size="sm"
            placeholder="00/00/0000"
            defaultValue={props.Nascimento}
          />

          <TextInput
            label=" Telefone"
            size="sm"
            placeholder="+00 (00) 00000-0000"
            defaultValue={props.Tel}
          />

          <TextInput
            label=" Cargo"
            size="sm"
            placeholder="Informe o cargo"
            defaultValue={props.Cargo}
          />

          <TextInput
            label=" Função"
            size="sm"
            placeholder="Informe a função"
            defaultValue={props.Funcao}
          />

          <TextInput
            label=" Logradouro"
            size="sm"
            placeholder="Informe o logradouro"
            defaultValue={props.Logradouro}
          />

          <TextInput
            label=" Número"
            size="sm"
            placeholder="Informe o número"
            defaultValue={props.Numero}
          />

          <TextInput
            label="Cidade"
            size="sm"
            placeholder="Informe a cidade"
            defaultValue={props.Cidade}
          />

          <TextInput
            label="Estado"
            size="sm"
            placeholder="Informe o estado"
            defaultValue={props.Estado}
          />

          <TextInput
            label="CEP"
            size="sm"
            placeholder="Informe o CEP"
            defaultValue={props.Cep}
          />

          <TextInput
            label="País"
            size="sm"
            placeholder="Informe o país"
            defaultValue={props.Pais}
          />

          <TextInput
            label="Ativo"
            size="sm"
            placeholder="00/00/0000"
            defaultValue={props.Ativo}
          />

          <TextInput
            label=" Inativo"
            size="sm"
            placeholder="00/00/0000"
            defaultValue={props.Inativo}
          />

          <Button className="botao" fullWidth size="sm" mt="xl" onClick={close}>
            Confirmar
          </Button>
        </Flex>
      </Modal>
    </div>
  );
}
