import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Maquinarias from "../pages/Maquinarias";
import ProductoDetalle from "../pages/ProductoDetalle";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/maquinarias" element={<Maquinarias />} />
          <Route path="/maquinarias/:id" element={<ProductoDetalle />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
