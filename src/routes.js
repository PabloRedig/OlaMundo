import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import SobreMin from "./Paginas/SobreMin";
import Menu from "./Componentes/Menu";
import Rodaper from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremin" element={<SobreMin />} />

        </Route>

        <Route path="/posts/:id" element={<Post />} />
        <Route path="/*" element={<NaoEncontrada />} />
      </Routes>

      <Rodaper />
    </BrowserRouter>
  )
}

export default AppRoutes;
