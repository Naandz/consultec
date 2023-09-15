import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";
import Fisica from "./pages/Fisica/Fisica";
import Home from "./pages/Home/Home";
import Juridica from "./pages/Juridica/Juridica";
import Login from "./pages/Login/Login";
import { useAuthStore } from "./stores/useAuthStore";

const AuthRoute = () => {
  const { token } = useAuthStore.getState();

  if (token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export function Router() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<Home />}>
        <Route path="/juridica" element={<Juridica />} />
        <Route path="/fisica" element={<Fisica />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}
