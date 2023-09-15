import { Route, Routes } from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";
import Fisica from "./pages/Fisica/Fisica";
import Home from "./pages/Home/Home";
import Juridica from "./pages/Juridica/Juridica";
import Login from "./pages/Login/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/juridica" element={<Juridica />} />
        <Route path="/fisica" element={<Fisica />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
