import { Button, Flex, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { AxiosError } from "axios";
import { Certificado } from "../services/certificado/Certificado";
import cadastraCertificado from "../services/certificado/cadastraCertificado";

interface ModalCadastra {
  certificado: Certificado;
  close: () => void;
  onSuccess: () => void;
}

export default function ModalCadCertificado(props: ModalCadastra) {
  const form = useForm({
    initialValues: {
      nome: "",
      senha: "",
      descricao: "",
      dtvalidade: "",
      idcontador: props.certificado?.idcontador,
      idcliente: props.certificado?.idcliente,
    },
    validate: {
      nome: isNotEmpty("O campo de nome não pode ser vazio"),
      senha: isNotEmpty("O campo de senha não pode ser vazio"),
      dtvalidade: isNotEmpty("O campo de validade não pode ser vazio"),
    },
  });

  const cadastra = async (certificado: Omit<Certificado, "_id">) => {
    try {
      await cadastraCertificado(certificado);

      props.close();
      props.onSuccess();

      form.reset();

      showNotification({
        title: "Ok",
        message: "Cadastro efetuado com sucesso!",
        color: "green",
      });
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error?.response?.data?.message
          : "Ocorreu um erro ao cadastrar. Por favor, tente novamente";
      showNotification({
        title: "Erro",
        message,
        color: "red",
      });
    }
  };

  return (
    <div>
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
            label="Descrição"
            size="sm"
            placeholder="Descrição do certificado"
            {...form.getInputProps("descricao")}
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
    </div>
  );
}
