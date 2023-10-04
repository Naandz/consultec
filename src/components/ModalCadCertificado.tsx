import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function ModalCadCertificado() {
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
        title="Novo certificado"
        fullScreen={isMobile}
      >
        <Flex gap="xs" direction="column">
          <TextInput label="Nome" size="sm" placeholder="Nome do certificado" />
          <TextInput label="Senha" size="sm" placeholder="Senha do certificado"/>
          <TextInput label="Validade" size="sm" placeholder="Validade do certificado" />
        </Flex>
        <Button className="botao" fullWidth size="sm" mt="xs" onClick={close}>
          Adicionar
        </Button>
      </Modal>
    </div>
  );
}
