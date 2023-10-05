import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import cadastraCertificado from "../services/certificado/cadastraCertificado";
import { Certificado } from "../services/certificado/Certificado";

interface Props {
  id: string;
}

export default function ModalCadCertificado(props: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  const form = useForm({
    initialValues: {
      nome: "",
      senha: "",
      dtvalidade: "",
    },
    validate: {
      nome: isNotEmpty("O campo de nome não pode ser vazio"),
      senha: isNotEmpty("O campo de senha não pode ser vazio"),
      dtvalidade: isNotEmpty("O campo de validade não pode ser vazio"),
    },
  });

  const cadastra = async (certificado: Certificado) => {
    try {
      await cadastraCertificado(certificado);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={form.onSubmit(cadastra)}>
          <Flex gap="xs" direction="column">
            <TextInput
              label="Nome"
              size="sm"
              placeholder="Nome do certificado"
              {...form.getInputProps("nome")}
            />
            <TextInput
              label="Senha"
              size="sm"
              placeholder="Senha do certificado"
              {...form.getInputProps("senha")}
            />
            <TextInput
              label="Validade"
              size="sm"
              placeholder="Validade do certificado"
              {...form.getInputProps("dtvalidade")}
            />
          </Flex>
          <Button
            className="botao"
            fullWidth
            size="sm"
            mt="xs"
            onClick={close}
            type="submit"
          >
            Adicionar
          </Button>
        </form>
      </Modal>
    </div>
  );
}
