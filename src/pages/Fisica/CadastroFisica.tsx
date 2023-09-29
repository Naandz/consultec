import { Button, Flex, Input, Switch } from "@mantine/core";
import style from "./Cadastro.module.css";

export default function CadastroFisica() {
  return (
    <div>
      <Flex justify="center" align="start">
      <Flex justify="center" align="center" direction='column' rowGap='xl'>
        <Flex columnGap="5em" rowGap="xs" direction="row" wrap="wrap">
          <Flex justify="center" align="start" gap="xs" direction="column">
            <Flex>
              <Switch.Group label="Contrato" withAsterisk size="sm">
                <Switch value="Contrato" />
              </Switch.Group>
            </Flex>
            <div>
              <label htmlFor="Nome">Nome</label>
              <Input
                name="Nome"
                placeholder="Informe o nome"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="CPF">CPF</label>
              <Input
                name="CPF"
                placeholder="Informe o CPF"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Ramo de Atividade">Ramo de Atividade</label>
              <Input
                name="Ramo de Atividade"
                placeholder="Informe o ramo de atividade"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="CEP">CEP</label>
              <Input
                name="CEP"
                placeholder="Informe o CEP"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Bairro">Bairro</label>
              <Input
                name="Bairro"
                placeholder="Informe o Bairro"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="logradouro">logradouro</label>
              <Input
                name="logradouro"
                placeholder="Informe o logradouro"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Usuário Sefaz">Usuário Sefaz</label>
              <Input
                name="Usuário Sefaz"
                placeholder="Login"
                className={style.inputCamp}
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
              />
            </div>
            <div>
              <label htmlFor="Telefone">Telefone</label>
              <Input
                name="Telefone"
                placeholder="Informe o telefone"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="E-mail">E-mail</label>
              <Input
                name="E-mail"
                placeholder="Informe o e-mail"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Cidade">Cidade</label>
              <Input
                name="Cidade"
                placeholder="Informe o cidade"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Estado">Estado</label>
              <Input
                name="Estado"
                placeholder="Informe o estado"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Numero">Numero</label>
              <Input
                name="Numero"
                placeholder="Informe o numero"
                className={style.inputCamp}
              />
            </div>
            <div>
              <label htmlFor="Senha Sefaz">Senha Sefaz</label>
              <Input
                name="Senha Sefaz"
                placeholder="Senha"
                className={style.inputCamp}
              />
            </div>
          </Flex>
        </Flex>
        <Button fullWidth className="botao" >Salvar</Button>
      </Flex>
      </Flex>
    </div>
  );
}
