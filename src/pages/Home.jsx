import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import ContactoSeccion from "../components/ContactoSeccion";
import { maquinas } from "../data/maquinas";
import { servicios } from "../data/servicios";

function Home() {
  const destacados = maquinas.filter((m) => m.destacado);

  return (
    <>
      <Hero />

      {/* Servicios */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold uppercase tracking-widest text-sm">¿Por qué elegirnos?</span>
            <h2 className="text-4xl font-extrabold text-gray-800 mt-2">Equipamiento y soluciones agrícolas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((s) => (
              <ServiceCard key={s.titulo} servicio={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3">
            <div>
              <span className="text-green-700 font-semibold uppercase tracking-widest text-xs">Catálogo</span>
              <h2 className="text-2xl font-extrabold text-gray-800 mt-1">Maquinarias destacadas</h2>
            </div>
            <Link
              to="/maquinarias"
              className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 rounded-full font-semibold transition-colors whitespace-nowrap text-sm"
            >
              Ver todo el catálogo →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destacados.map((m) => (
              <ProductCard key={m.id} maquina={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner financiación */}
      <section className="bg-yellow-400 py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-extrabold text-green-900">Financiación a tu medida</h3>
            <p className="text-green-800 mt-2">
              Consultanos sin compromiso.
            </p>
          </div>
          <Link
            to="/contacto"
            className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors whitespace-nowrap shadow-lg"
          >
            Consultar financiación
          </Link>
        </div>
      </section>

      <ContactoSeccion />
    </>
  );
}

export default Home;
