import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import CadastroFisica from "./pages/Fisica/CadastroFisica";
import ClienteFisica from "./pages/Fisica/ClienteFisica";
import Fisica from "./pages/Fisica/Fisica";
import Home from "./pages/Home/Home";
import CadastroJuridica from "./pages/Juridica/CadastroJuridica";
import ListaFuncionarioJuridico from "./components/Funcionarios/ListaFuncionarioJuridico";
import Juridica from "./pages/Juridica/Juridica";
import Login from "./pages/Login/Login";
import { useAuthStore } from "./stores/useAuthStore";
import ClienteJuridico from "./pages/Juridica/ClienteJuridico";

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
            path="/cadastro/juridica"
            element={<ProtectedRoute outlet={<CadastroJuridica />} />}
          />
          <Route
            path="/juridica/funcionario/:id"
            element={<ProtectedRoute outlet={<ListaFuncionarioJuridico />} />}
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
            path="/cliente/fisica/clientefisica"
            element={<ProtectedRoute outlet={<ClienteFisica />} />}
          />
          <Route
            path="/cliente/juridico/:id"
            element={<ProtectedRoute outlet={<ClienteJuridico />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
