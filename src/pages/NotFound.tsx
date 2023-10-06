import { Button, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="center" direction="column">
      <h1 className="NotFound">404</h1>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
      <Button className="botao" onClick={() => navigate("/")}>
        Voltar para a página inicial
      </Button>
    </Flex>
  );
}
