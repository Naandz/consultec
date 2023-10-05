import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import cadastraFuncionario from "../../services/funcionarios/cadastraFuncionario";

export default function ModalCadFuncionarios() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  const form = useForm({
    initialValues: {
      nome: "",
      cpf: "",
      rg: "",
      pis: "",
      mae: "",
      pai: "",
      nascimento: "",
      tel: "",
      cargo: "",
      funcao: "",
      logradouro: "",
      numero: "",
      cidade: "",
      estado: "",
      cep: "",
      pais: "",
      ativo: "",
    },
    validate: {
      nome: isNotEmpty("O campo de nome não pode ser vazio"),
      cpf: isNotEmpty("O campo de cpf não pode ser vazio"),
      rg: isNotEmpty("O campo de rg não pode ser vazio"),
      pis: isNotEmpty("O campo de pis não pode ser vazio"),
      mae: isNotEmpty("O campo de mae não pode ser vazio"),
      pai: isNotEmpty("O campo de pai não pode ser vazio"),
      nascimento: isNotEmpty("O campo de nascimento não pode ser vazio"),
      tel: isNotEmpty("O campo de telefone não pode ser vazio"),
      cargo: isNotEmpty("O campo de cargo não pode ser vazio"),
      funcao: isNotEmpty("O campo de funcao não pode ser vazio"),
      logradouro: isNotEmpty("O campo de logradouro não pode ser vazio"),
      numero: isNotEmpty("O campo de número não pode ser vazio"),
      cidade: isNotEmpty("O campo de cidade não pode ser vazio"),
      estado: isNotEmpty("O campo de estado não pode ser vazio"),
      cep: isNotEmpty("O campo de cep não pode ser vazio"),
      pais: isNotEmpty("O campo de pais não pode ser vazio"),
      ativo: isNotEmpty("O campo de ativo não pode ser vazio"),
    },
  });

  const cadastra = async (values: any) => {
    try {
      await cadastraFuncionario(values);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button className="botao" onClick={open}>
        +
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Novo funcionário"
        size="xl"
        fullScreen={isMobile}
      >
        <form onSubmit={form.onSubmit((values) => cadastra(values))}>
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
              {...form.getInputProps("nome")}
            />

            <TextInput
              label="CPF"
              size="sm"
              placeholder="000.000.000-00"
              {...form.getInputProps("cpf")}
            />

            <TextInput
              label="RG"
              size="sm"
              placeholder="00.000.000-0"
              {...form.getInputProps("rg")}
            />

            <TextInput
              label="PIS"
              size="sm"
              placeholder="000.00000.00-0"
              {...form.getInputProps("pis")}
            />

            <TextInput
              label="Mãe"
              size="sm"
              placeholder="Informe o nome da mãe"
              {...form.getInputProps("mae")}
            />

            <TextInput
              label="Pai"
              size="sm"
              placeholder="Informe o nome do pai"
              {...form.getInputProps("pai")}
            />

            <TextInput
              label=" Nascimento"
              size="sm"
              placeholder="00/00/0000"
              {...form.getInputProps("nascimento")}
            />

            <TextInput
              label="Telefone"
              size="sm"
              placeholder="+00 (00) 00000-0000"
              {...form.getInputProps("tel")}
            />

            <TextInput
              label=" Cargo"
              size="sm"
              placeholder="Informe o cargo"
              {...form.getInputProps("cargo")}
            />

            <TextInput
              label=" Função"
              size="sm"
              placeholder="Informe a função"
              {...form.getInputProps("funcao")}
            />

            <TextInput
              label=" Logradouro"
              size="sm"
              placeholder="Informe o logradouro"
              {...form.getInputProps("logradouro")}
            />

            <TextInput
              label=" Número"
              size="sm"
              placeholder="Informe o número"
              {...form.getInputProps("numero")}
            />

            <TextInput
              label=" Cidade"
              size="sm"
              placeholder="Informe a cidade"
              {...form.getInputProps("cidade")}
            />

            <TextInput
              label=" Estado"
              size="sm"
              placeholder="Informe o estado"
              {...form.getInputProps("estado")}
            />

            <TextInput
              label=" CEP"
              size="sm"
              placeholder="Informe o CEP"
              {...form.getInputProps("cep")}
            />

            <TextInput
              label=" País"
              size="sm"
              placeholder="Informe o país"
              {...form.getInputProps("pais")}
            />

            <TextInput
              label=" Ativo"
              size="sm"
              placeholder="00/00/0000"
              {...form.getInputProps("ativo")}
            />

            <TextInput label=" Inativo" size="sm" placeholder="00/00/0000" />

            <Button
              className="botao"
              fullWidth
              size="sm"
              mt="xl"
              type="submit"
              // onClick={close}
            >
              Adicionar
            </Button>
          </Flex>
        </form>
      </Modal>
    </div>
  );
}
