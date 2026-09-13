
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';

import { Inicio } from '../components/pages/Inicio';
import { Articulos } from '../components/pages/Articulos';
import { Crear } from '../components/pages/Crear';
import { Busqueda } from '../components/pages/Busqueda';
import { Editar } from '../components/pages/Editar';
import { Articulo } from '../components/pages/Articulo';

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/crear-articulo" element={<Crear />} />
          <Route path="/buscar/:busqueda" element={<Busqueda />} />
          <Route path="/editar/:id" element={<Editar />} />
          <Route path="/articulo/:id" element={<Articulo />} />
        </Routes>
      </section>

      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};