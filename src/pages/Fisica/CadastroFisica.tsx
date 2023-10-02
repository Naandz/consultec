import { Button, Flex, Input, Switch } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import style from "./Cadastro.module.css";
import cadastraCliente from "../../services/client/cadastraClientes";

export default function CadastroFisica() {
  const form = useForm({
    initialValues: {
      nome: "",
      cgc: "",
      apelido: "",
      telefone: "",
      email: "",
      cep: "",
      cidade: "",
      estado: "",
      numero: "",
      bairro: "",
      ramodeatividade: "",
      logradouro: "",
      usursefaz: "",
      passsefaz: "",
      contrato: "",
      pais: "",
      cnae: "",
    },
    validate:{  
      nome: isNotEmpty("O campo de nome não pode ser vazio"),
      cgc: isNotEmpty("O campo de cgc não pode ser vazio"),
      apelido: isNotEmpty("O campo de apelido não pode ser vazio"),
      telefone: isNotEmpty("O campo de telefone não pode ser vazio"),  
      email: isNotEmpty("O campo de email não pode ser vazio"),
      cidade: isNotEmpty("O campo de cidade não pode ser vazio"),
      cep: isNotEmpty("O campo de cep não pode ser vazio"),
      estado: isNotEmpty("O campo de estado não pode ser vazio"),
      bairro: isNotEmpty("O campo de bairro não pode ser vazio"),
      numero: isNotEmpty("O campo de numero não pode ser vazio"),
      ramodeatividade: isNotEmpty("O campo de atividades não pode ser vazio"),
      logradouro: isNotEmpty("O campo de logradouro não pode ser vazio"),
      usursefaz: isNotEmpty("O campo de usuario não pode ser vazio"),
      passsefaz: isNotEmpty("O campo de senha não pode ser vazio"),
      contrato: isNotEmpty("O campo de contrato não pode ser vazio"),
      pais: isNotEmpty("O campo de país não pode ser vazio"),
      cnae: isNotEmpty("O campo de cnae não pode ser vazio"),
    }
  });

  const cadastra = async({
    nome,
    cgc,
    apelido,
    telefone,
    email,
    cep,
    cidade,
    estado,
    bairro,
    numero,
    ramodeatividade,
    logradouro,
    usursefaz,
    passsefaz,
    contrato,
    pais,
    cnae,
  }: {
    nome: string;
    cgc: string;
    apelido: string;
    telefone: string;
    email: string;
    cep: string;
    cidade: string;
    estado: string;
    bairro: string;
    numero: string;
    ramodeatividade: string;
    logradouro: string;
    usursefaz: string;
    passsefaz: string;
    contrato: string;
    pais: string;
    cnae: string;
  }) => {
    try{
      await cadastraCliente({
        nome,
        cgc,
        apelido,
        telefone,
        email,
        cep,
        cidade,
        estado,
        bairro,
        numero,
        ramodeatividade,
        logradouro,
        usursefaz,
        passsefaz,
        contrato,
        pais,
        cnae,
      });
      form.reset();
    } catch (error){
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={form.onSubmit(cadastra)}>
      <Flex justify="center" align="start">
      <Flex justify="center" align="center" direction='column' rowGap='xl'>
        <Flex columnGap="5em" rowGap="xs" direction="row" wrap="wrap">
          <Flex justify="center" align="start" gap="xs" direction="column">
            <Flex>           
              <Switch.Group label="Contrato" 
              withAsterisk 
              size="sm"
              {...form.getInputProps("contrato")}>
                <Switch value="Contrato" />
              </Switch.Group>
            </Flex>
            <div>
              <label htmlFor="Nome">Nome</label>
              <Input
                name="Nome"
                placeholder="Informe o nome"
                className={style.inputCamp}
                {...form.getInputProps("nome")}
              />
            </div>
            <div>
              <label htmlFor="CPF">CPF</label>
              <Input
                name="CPF"
                placeholder="Informe o CPF"
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
                {...form.getInputProps("ramodeatividade")}
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
              <label htmlFor="cnae">CNAE</label>
              <Input
                name="cnae"
                placeholder="Informe o cnae"
                className={style.inputCamp}
                {...form.getInputProps("cnae")}
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
              <label htmlFor="Apelido">Apelido</label>
              <Input
                name="Apelido"
                placeholder="Informe o apelido"
                className={style.inputCamp}
                {...form.getInputProps("apelido")}
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
              <label htmlFor="pais">País</label>
              <Input
                name="pais"
                placeholder="Informe o País"
                className={style.inputCamp}
                {...form.getInputProps("pais")}
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
        <Button fullWidth className="botao" >Salvar</Button>
      </Flex>
      </Flex>
      </form>
    </div>
  );
}
