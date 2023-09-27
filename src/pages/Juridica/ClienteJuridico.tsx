import style from "./ClienteJuridico.module.css";
import { Flex, Switch, Button } from "@mantine/core";

export default function ClienteJuridico() {
    return (
      <div>
        <Flex justify="center" align="start">
          <Flex justify="center" align="center" direction="column" rowGap="xl">
            <Flex columnGap="5em" rowGap="xs" direction="row" wrap="wrap">
              <Flex justify="center" align="start" gap="xs" direction="column">
                <Flex>
                  <Switch.Group label="Contrato" size="sm">
                    <Switch value="Contrato" />
                  </Switch.Group>
                </Flex>
                <div>
                  <label> Nome</label>
                  <div className={style.dados}>
                    
                  </div>
                </div>
                <div>
                  <label> CPF</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Ramo de Atividade</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> CEP</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Bairro</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> logradouro</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Usuário Sefaz</label>
                  <div className={style.dados}></div>
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
                  <label> Apelido</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Telefone</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> E-mail</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Cidade</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Estado</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Numero</label>
                  <div className={style.dados}></div>
                </div>
                <div>
                  <label> Senha Sefaz</label>
                  <div className={style.dados}></div>
                </div>
              </Flex>
            </Flex>
  
            <Button fullWidth className={style.botao}>
              Editar
            </Button>
          </Flex>
        </Flex>
      </div>
    );
  }