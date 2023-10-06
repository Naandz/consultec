import { Button, Flex, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="center" direction="column" gap={14}>
      <Title color="blue">404</Title>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não foi encontrada.</p>
      <Button className="botao" onClick={() => navigate("/")}>
        Voltar para a página inicial
      </Button>
    </Flex>
  );
}
