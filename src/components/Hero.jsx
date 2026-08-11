import { Link } from "react-router-dom";
import lugarImg from "../assets/lugar.png";

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
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-36 text-center">

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
          Tractores, cosechadoras, sembradoras y más. Más de -- años
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

    </section>
  );
}

export default Hero;
