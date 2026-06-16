import { Link } from "react-router-dom";
import lugarImg from "../assets/lugar.png";

const stats = [
  { valor: "+30", label: "Años de experiencia" },
  { valor: "+500", label: "Ventas realizadas" },
  { valor: "+200", label: "Clientes activos" },
  { valor: "100%", label: "Financiación disponible" },
];

function Hero() {
  return (
    <section className="grain-section relative text-white overflow-hidden">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${lugarImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(27,58,32,0.96) 0%, rgba(27,58,32,0.82) 55%, rgba(27,58,32,0.55) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-28 text-center">

        {/* Eyebrow */}
        <div className="animate-fade-up delay-1 flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10" style={{ backgroundColor: "var(--color-dorado)", opacity: 0.7 }} />
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-dorado)",
            }}
          >
            Maquinaria Nueva y Usada · El Tío, Córdoba
          </span>
          <div className="h-px w-10" style={{ backgroundColor: "var(--color-dorado)", opacity: 0.7 }} />
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-2 leading-none mb-6 text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            letterSpacing: "0.04em",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
          }}
        >
          Tu campo merece <br />
          <span style={{ color: "var(--color-dorado)" }}>lo mejor</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up delay-3 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.2rem",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Tractores, cosechadoras, sembradoras y más. Más de 30 años
          acompañando al productor argentino con la mejor maquinaria agrícola.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/maquinarias" className="btn-primary">
            Ver Catálogo completo
          </Link>
          <Link to="/contacto" className="btn-ghost">
            Consultar ahora
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.24)",
          backgroundColor: "rgba(13, 31, 16, 0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`animate-fade-up delay-${5 + i}`}>
              <p
                className="leading-none mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.4rem",
                  color: "var(--color-dorado)",
                  letterSpacing: "0.04em",
                }}
              >
                {s.valor}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal cut at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "60px",
          backgroundColor: "var(--color-roto)",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />
    </section>
  );
}

export default Hero;
