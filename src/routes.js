import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMin from "./Paginas/SobreMin";
import Menu from "./Componentes/Menu";
import Rodaper from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobremin" element={<SobreMin />} />
        </Route>

        <Route path="/*" element={<div>Pagina nao encontrada</div>} />
      </Routes>

      <Rodaper />
    </BrowserRouter>
  )
}

export default AppRoutes;
