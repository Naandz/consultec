import styles from "./Home.module.css";

import {
  AppShell,
  Burger,
  Flex,
  Group,
  Header,
  MediaQuery,
  NavLink,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { TbLogout } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const itensMenu = [
    {
      label: "Júridica",
      path: "/juridica",
    },
    {
      label: "Física",
      path: "/fisica",
    },
    {
      label: "Cadastro",
      path: "/cadastro",
    },
  ];

  return (
    <AppShell
      padding="md"
      header={
        <Header height={{ base: 50, md: 60 }} p="md" className={styles.header}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[0]}
                mr="xl"
              />
            </MediaQuery>
            <Title className={styles.title}>CONSULTEC</Title>
            <Flex>
              <Group spacing={5}>
                <Flex>
                  {itensMenu.map((item) => (
                    <NavLink
                      key={item.label}
                      label={item.label}
                      component={Link}
                      to={item.path}
                      onClick={() => setOpened(false)}
                      className={styles.iten}
                    />
                  ))}
                </Flex>
              </Group>
              <NavLink
                icon={<TbLogout />}
                onClick={logout}
                className={styles.logout}
              />
            </Flex>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
