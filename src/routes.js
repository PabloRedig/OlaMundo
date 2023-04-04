import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMin from "./Paginas/SobreMin";
import Menu from "./Componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobremin" element={<SobreMin />} />
        <Route path="/*" element={<div>Pagina nao encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
