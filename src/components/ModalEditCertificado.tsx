import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

interface InfoCertificadoProps{
    Nome: string;
    Senha: string;
    Validade: string;
}

export default function ModalEditCertificado(props: InfoCertificadoProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <div>
      <Button className="botao" type="submit" onClick={open}>
      TESTE EDITAR CERTIFICADO
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Novo certificado"
        fullScreen={isMobile}
      >
        <Flex gap="xs" direction="column">
          <TextInput label="Nome" size="sm" placeholder="Nome do certificado" defaultValue={props.Nome}/>
          <TextInput label="Senha" size="sm" placeholder="Senha do certificado" defaultValue={props.Senha}/>
          <TextInput label="Validade" size="sm" placeholder="Validade do certificado" defaultValue={props.Validade}/>
        </Flex>
        <Button className="botao" fullWidth size="sm" mt="xs" onClick={close}>
          Confirmar
        </Button>
      </Modal>
    </div>
  );
}
