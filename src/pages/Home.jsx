import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import ContactoSeccion from "../components/ContactoSeccion";
import { maquinas } from "../data/maquinas";
import { servicios } from "../data/servicios";

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-8" style={{ backgroundColor: "var(--color-dorado)", opacity: 0.7 }} />
      <span
        style={{
          fontFamily: "var(--font-label)",
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--color-dorado)",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function Home() {
  const destacados = maquinas.filter((m) => m.destacado);

  return (
    <>
      <Hero />

      {/* Servicios */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-roto)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <SectionLabel>¿Por qué elegirnos?</SectionLabel>
            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "0.04em",
                color: "var(--color-carbon)",
              }}
            >
              Equipamiento y soluciones agrícolas
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {servicios.map((s) => (
              <ServiceCard key={s.titulo} servicio={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="h-px mx-6 md:mx-24" style={{ background: "linear-gradient(to right, transparent, var(--color-dorado), transparent)", opacity: 0.35 }} />

      {/* Maquinarias destacadas */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-crema)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <SectionLabel>Catálogo</SectionLabel>
              <h2
                className="leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  letterSpacing: "0.04em",
                  color: "var(--color-carbon)",
                }}
              >
                Maquinarias destacadas
              </h2>
            </div>
            <Link
              to="/maquinarias"
              className="btn-ghost-dark shrink-0"
              style={{ alignSelf: "flex-end" }}
            >
              Ver todo el catálogo →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destacados.map((m) => (
              <ProductCard key={m.id} maquina={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner financiación */}
      <section
        className="grain-section py-20 px-6"
        style={{ backgroundColor: "var(--color-tierra)" }}
      >
        {/* Decorative diagonal lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 28px)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "9.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "8px",
              }}
            >
              Facilidades de pago
            </p>
            <h3
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                letterSpacing: "0.04em",
              }}
            >
              Financiación a tu medida
            </h3>
            <p
              className="mt-3"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Consultanos sin compromiso. Planes flexibles para cada productor.
            </p>
          </div>
          <Link
            to="/contacto"
            className="btn-primary shrink-0"
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
