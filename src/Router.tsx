import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import CadastroFisica from "./pages/Cadastro/Fisica/CadastroFisica";
import CadastroJuridica from "./pages/Cadastro/Juridica/CadastroJuridica";
import Fisica from "./pages/Fisica/Fisica";
import Home from "./pages/Home/Home";
import Juridica from "./pages/Juridica/Juridica";
import Login from "./pages/Login/Login";
import ClienteFisica from "./pages/Cliente/Fisica/ClienteFisica";
import { useAuthStore } from "./stores/useAuthStore";

const AuthRoute = () => {
  const { access_token } = useAuthStore.getState();

  if (access_token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

function ProtectedRoute({ outlet }: { outlet: JSX.Element }) {
  const { access_token } = useAuthStore.getState();

  if (!access_token) {
    return <Navigate to="/session/login" />;
  }
  return outlet;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/session/login" element={<Login />} />
        </Route>
        <Route path="/" element={<ProtectedRoute outlet={<Home />} />}>
          <Route
            path="/juridica"
            element={<ProtectedRoute outlet={<Juridica />} />}
          />
          <Route
            path="/fisica"
            element={<ProtectedRoute outlet={<Fisica />} />}
          />
          <Route
            path="/cadastro/fisica"
            element={<ProtectedRoute outlet={<CadastroFisica />} />}
          />
          <Route
            path="/cadastro/juridica"
            element={<ProtectedRoute outlet={<CadastroJuridica />} />}
          />
          <Route
            path="/cliente/fisica/clienteFisica"
            element={<ProtectedRoute outlet={<ClienteFisica />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
