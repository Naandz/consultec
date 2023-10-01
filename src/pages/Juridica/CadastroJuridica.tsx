import { Button, Flex, Input, Switch } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import style from "./Cadastro.module.css";
import cadastraCliente from "../../services/client/cadastraClientes";

export default function CadastroJuridica() {
  interface FormValues {
    bairro: string;
    cep: string;
    cgc: string;
    cidade: string;
    contrato: string;
    email: string;
    estado: string;
    fantasia: string;
    logradouro: string;
    numero: string;
    passsefaz: string;
    ramoatividade: string;
    razaosocial: string;
    telefone: string;
    usursefaz: string;
  }

  const form = useForm<FormValues>({
    initialValues: {
      bairro: "",
      cep: "",
      cgc: "",
      cidade: "",
      contrato: "",
      email: "",
      estado: "",
      fantasia: "",
      logradouro: "",
      numero: "",
      passsefaz: "",
      ramoatividade: "",
      razaosocial: "",
      telefone: "",
      usursefaz: "",
    },
    validate: {
      bairro: isNotEmpty("Bairro"),
      cep: isNotEmpty("CEP"),
      cgc: isNotEmpty("CNPJ"),
      cidade: isNotEmpty("Cidade"),
      contrato: isNotEmpty("Contrato"),
      email: isNotEmpty("E-mail"),
      estado: isNotEmpty("Estado"),
      fantasia: isNotEmpty("Fantasia"),
      logradouro: isNotEmpty("Logradouro"),
      numero: isNotEmpty("Número"),
      passsefaz: isNotEmpty("Senha"),
      ramoatividade: isNotEmpty("Ramo de Atividade"),
      razaosocial: isNotEmpty("Razão Social"),
      telefone: isNotEmpty("Telefone"),
      usursefaz: isNotEmpty("Usuário"),
    },
  });

  const cadastra = async (values: FormValues) => {
    try {
      await cadastraCliente(values);

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={form.onSubmit(cadastra)}>
        <Flex justify="center" align="start">
          <Flex justify="center" align="center" direction="column" rowGap="xl">
            <Flex columnGap="5em" rowGap="xs" direction="row" wrap="wrap">
              <Flex justify="center" align="start" gap="xs" direction="column">
                <Flex>
                  <Switch.Group
                    label="Contrato"
                    withAsterisk
                    size="sm"
                    {...form.getInputProps("contrato")}
                  >
                    <Switch value="Contrato" />
                  </Switch.Group>
                </Flex>
                <div>
                  <label htmlFor="Razão Social">Razão Social</label>
                  <Input
                    name="Razão Social"
                    placeholder="Informe a razão social"
                    className={style.inputCamp}
                    {...form.getInputProps("razaosocial")}
                  />
                </div>
                <div>
                  <label htmlFor="CPF">CNPJ</label>
                  <Input
                    name="CNPJ"
                    placeholder="Informe o CNPJ"
                    className={style.inputCamp}
                    {...form.getInputProps("cgc")}
                  />
                </div>
                <div>
                  <label htmlFor="Ramo de Atividade">Ramo de Atividade</label>
                  <Input
                    name="Ramo de Atividade"
                    placeholder="Informe o ramo de atividade"
                    className={style.inputCamp}
                    {...form.getInputProps("ramoatividade")}
                  />
                </div>
                <div>
                  <label htmlFor="CEP">CEP</label>
                  <Input
                    name="CEP"
                    placeholder="Informe o CEP"
                    className={style.inputCamp}
                    {...form.getInputProps("cep")}
                  />
                </div>
                <div>
                  <label htmlFor="Bairro">Bairro</label>
                  <Input
                    name="Bairro"
                    placeholder="Informe o Bairro"
                    className={style.inputCamp}
                    {...form.getInputProps("bairro")}
                  />
                </div>
                <div>
                  <label htmlFor="logradouro">logradouro</label>
                  <Input
                    name="logradouro"
                    placeholder="Informe o logradouro"
                    className={style.inputCamp}
                    {...form.getInputProps("logradouro")}
                  />
                </div>
                <div>
                  <label htmlFor="Usuário Sefaz">Usuário Sefaz</label>
                  <Input
                    name="Usuário Sefaz"
                    placeholder="Login"
                    className={style.inputCamp}
                    {...form.getInputProps("usursefaz")}
                  />
                </div>
              </Flex>
              <Flex justify="center" align="center" gap="xs" direction="column">
                <Flex align="center" columnGap="5.4em" direction="row">
                  <Switch.Group label="Fiscal" size="sm">
                    <Switch value="fiscal" />
                  </Switch.Group>
                  <Switch.Group label="Pessoal" size="sm">
                    <Switch value="pessoal" />
                  </Switch.Group>
                  <Switch.Group label="Contábil" size="sm">
                    <Switch value="contabil" />
                  </Switch.Group>
                </Flex>
                <div>
                  <label htmlFor="Nome Fantasia">Nome Fantasia</label>
                  <Input
                    name="Nome Fantasia"
                    placeholder="Informe o nome fantasia"
                    className={style.inputCamp}
                    {...form.getInputProps("fantasia")}
                  />
                </div>
                <div>
                  <label htmlFor="Telefone">Telefone</label>
                  <Input
                    name="Telefone"
                    placeholder="Informe o telefone"
                    className={style.inputCamp}
                    {...form.getInputProps("telefone")}
                  />
                </div>
                <div>
                  <label htmlFor="E-mail">E-mail</label>
                  <Input
                    name="E-mail"
                    placeholder="Informe o e-mail"
                    className={style.inputCamp}
                    {...form.getInputProps("email")}
                  />
                </div>
                <div>
                  <label htmlFor="Cidade">Cidade</label>
                  <Input
                    name="Cidade"
                    placeholder="Informe o cidade"
                    className={style.inputCamp}
                    {...form.getInputProps("cidade")}
                  />
                </div>
                <div>
                  <label htmlFor="Estado">Estado</label>
                  <Input
                    name="Estado"
                    placeholder="Informe o estado"
                    className={style.inputCamp}
                    {...form.getInputProps("estado")}
                  />
                </div>
                <div>
                  <label htmlFor="Numero">Numero</label>
                  <Input
                    name="Numero"
                    placeholder="Informe o numero"
                    className={style.inputCamp}
                    {...form.getInputProps("numero")}
                  />
                </div>
                <div>
                  <label htmlFor="Senha Sefaz">Senha Sefaz</label>
                  <Input
                    name="Senha Sefaz"
                    placeholder="Senha"
                    className={style.inputCamp}
                    {...form.getInputProps("passsefaz")}
                  />
                </div>
              </Flex>
            </Flex>
            <Button fullWidth className="botao" type="submit">
              Salvar
            </Button>
          </Flex>
        </Flex>
      </form>
    </div>
  );
}
