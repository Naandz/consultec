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
        <Card shadow="sm" p="lg">
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Button
            variant="gradient"
            gradient={{ from: "#2256f2", to: "#4674FF" }}
            fullWidth
          >
            Entrar
          </Button>
        </Card>
        
      </div>
    </div>
  );
}
