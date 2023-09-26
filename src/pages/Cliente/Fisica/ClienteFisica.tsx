import { Button, Flex, Switch } from "@mantine/core";
import style from "./ClienteFisica.module.css";

export default function clienteFisica() {
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
                  Gabryel Kadmo Santos de Lucena
                </div>
              </div>
              <div>
                <label> CPF</label>
                <div className={style.dados}>258.789.741-86</div>
              </div>
              <div>
                <label> Ramo de Atividade</label>
                <div className={style.dados}>Desenvolvedor</div>
              </div>
              <div>
                <label> CEP</label>
                <div className={style.dados}>69980-000</div>
              </div>
              <div>
                <label> Bairro</label>
                <div className={style.dados}>Jardim Primavera</div>
              </div>
              <div>
                <label> logradouro</label>
                <div className={style.dados}>Rua Santos Barbosa</div>
              </div>
              <div>
                <label> Usuário Sefaz</label>
                <div className={style.dados}>Kadmon59</div>
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
                <div className={style.dados}>Kadmo</div>
              </div>
              <div>
                <label> Telefone</label>
                <div className={style.dados}>(73) 98843-6959</div>
              </div>
              <div>
                <label> E-mail</label>
                <div className={style.dados}>gabryel.kadmo@gmail.com</div>
              </div>
              <div>
                <label> Cidade</label>
                <div className={style.dados}>Cruzeiro do Sul</div>
              </div>
              <div>
                <label> Estado</label>
                <div className={style.dados}>Acre</div>
              </div>
              <div>
                <label> Numero</label>
                <div className={style.dados}>123</div>
              </div>
              <div>
                <label> Senha Sefaz</label>
                <div className={style.dados}>kadmo123</div>
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
