import styles from "./Home.module.css";

import {
  AppShell,
  Burger,
  Flex,
  Group,
  Header,
  MediaQuery,
  NavLink,
  useMantineTheme,
  Modal,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Link, Outlet, useNavigate } from "react-router-dom";
import consultec from "../../assets/CONSULTEC.svg";
import { useDisclosure } from "@mantine/hooks";
import { useAuthStore } from "../../stores/useAuthStore";
export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openedModal, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();
  const authStore = useAuthStore();

  const logout = () => {
    authStore.logout();
    navigate("/session/login");
  };

  const itensMenu = [
    {
      label: "Júridica",
      icon: FaBalanceScale,
      path: "/juridica",
    },
    {
      label: "Física",
      icon: BsFileEarmarkPersonFill,
      path: "/fisica",
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
            <img
              src={consultec}
              alt="logo da consultec"
              onClick={() => navigate("/")}
              className={styles.logo}
            />
            <Flex>
              <Group spacing={5}>
                <Flex>
                  {itensMenu.map((item) => (
                    <NavLink
                      key={item.label}
                      label={item.label}
                      icon={<item.icon />}
                      component={Link}
                      to={item.path}
                      onClick={() => setOpened(false)}
                      className={styles.iten}
                    />
                  ))}
                  <NavLink
                    label="Cadastro"
                    icon={<AiFillFileAdd />}
                    onClick={open}
                    className={styles.iten}
                  />
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
      <Modal
        opened={openedModal}
        onClose={close}
        title="Selecione o tipo do cliente"
        
      >
        <Flex justify="center" align="center" gap="xl">
          <Button
            className="botao"
            fullWidth
            size="md"
            onClick={() => {
              close()
              navigate("/cadastro/juridica");
            }}
          >
            Júridico
          </Button>
          <Button
            className="botao"
            fullWidth
            size="md"
            onClick={() => {
              close()
              navigate("/cadastro/fisica");
            }}
            
          >
            Físico
          </Button>
        </Flex>
      </Modal>
    </AppShell>
  );
}
