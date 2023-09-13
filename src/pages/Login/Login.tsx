import { Button, Card, Input, Text } from "@mantine/core";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Consultec</h1>
        <Text color="#757578">
          Contabilidade Profissional, Soluções Sólidas!
        </Text>
      </div>
      <div className={styles.card}>
        <Card radius="md" shadow="sm" p="lg">
          <Input m="xl" placeholder="E-mail" />
          <Input m="xl" placeholder="Senha" />
          <Button m="sm"
            loaderPosition="center"
            variant="gradient"
            gradient={{ from: "#2256f2", to: "#4674FF" }}
            
          >
            Entrar
          </Button>
        </Card>
      </div>
    </div>
  );
}
