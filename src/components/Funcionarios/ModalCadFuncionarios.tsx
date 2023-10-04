import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function ModalCadFuncionarios() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");
  return (
    <div>
      <Button className="botao" type="submit" onClick={open}>
        +
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Novo funcionário"
        size="xl"
        fullScreen={isMobile}
      >
        <Flex gap="xs" wrap="wrap" justify="space-around" direction={isMobile? 'column' : 'row'}>
          <TextInput label="Nome" size='sm'  placeholder="Informe o nome" />

          <TextInput label="CPF" size="sm" placeholder="000.000.000-00" />

          <TextInput label="RG" size="sm" placeholder="00.000.000-0" />

          <TextInput label="PIS" size="sm" placeholder="000.00000.00-0" />

          <TextInput
            label="Mãe"
            size="sm"
            placeholder="Informe o nome da mãe"
          />

          <TextInput
            label="Pai"
            size="sm"
            placeholder="Informe o nome do pai"
          />

          <TextInput label=" Nascimento" size="sm" placeholder="00/00/0000" />

          <TextInput
            label=" Telefone"
            size="sm"
            placeholder="+00 (00) 00000-0000"
          />

          <TextInput label=" Cargo" size="sm" placeholder="Informe o cargo" />

          <TextInput label=" Função" size="sm" placeholder="Informe a função" />

          <TextInput
            label=" Logradouro"
            size="sm"
            placeholder="Informe o logradouro"
          />

          <TextInput label=" Número" size="sm" placeholder="Informe o número" />

          <TextInput label=" Cidade" size="sm" placeholder="Informe a cidade" />

          <TextInput label=" Estado" size="sm" placeholder="Informe o estado" />

          <TextInput label=" CEP" size="sm" placeholder="Informe o CEP" />

          <TextInput label=" País" size="sm" placeholder="Informe o país" />

          <TextInput label=" Ativo" size="sm" placeholder="00/00/0000" />

          <TextInput label=" Inativo" size="sm" placeholder="00/00/0000" />

          <Button className="botao" fullWidth size="sm" mt="xl" onClick={close}>
            Adicionar
          </Button>
        </Flex>
      </Modal>
      
    </div>
  );
}
