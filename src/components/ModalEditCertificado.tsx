import { isNotEmpty, useForm } from "@mantine/form";
import { Certificado } from "../services/certificado/Certificado";
import { showNotification } from "@mantine/notifications";
import editaCertificado from "../services/certificado/editaCertificado";
import { Button, Flex, TextInput } from "@mantine/core";
import { AxiosError } from "axios";

interface ModalEditCertificado {
  certificado: Certificado;
  close: () => void;
  onSuccess: () => void;
}
export default function ModalEditCertificado(props: ModalEditCertificado) {
  const form = useForm({
    initialValues: {
      nome: "",
      senha: "",
      dtvalidade: "",
      descricao: "",
      idcontador: props.certificado?.idcontador,
    },
    validate: {
      nome: isNotEmpty("O campo de nome não pode ser vazio"),
      senha: isNotEmpty("O campo de senha não pode ser vazio"),
      dtvalidade: isNotEmpty("O campo de validade não pode ser vazio"),
    },
  });

  const edita = async (
    certificado: Omit<Certificado, "_id" | "idcontador" | "idcliente">
  ) => {
    try {
      await editaCertificado(props.certificado?._id, certificado);

      props.onSuccess();

      showNotification({
        title: "Ok",
        message: "Registro alterado com sucesso!",
        color: "green",
      });

      props.close();
    } catch (error) {
      const message =
        error instanceof AxiosError
          ? error?.response?.data?.message
          : "Ocorreu um erro ao editar. Por favor, tente novamente";
      showNotification({
        title: "Erro",
        message,
        color: "red",
      });
    }
  };
  return (
    <form onSubmit={form.onSubmit(edita)}>
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
      <Button className="botao" fullWidth mt="xs" type="submit" onClick={close}>
        Confirmar
      </Button>
    </form>
  );
}
