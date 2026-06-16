import { Link } from "react-router-dom";
import equipoImg from "../assets/equipo.jpg.jpeg";

const statItems = [
  { valor: "---", label: "Año de fundación" },
  { valor: "+---", label: "Máquinas vendidas" },
  { valor: "+---", label: "Clientes activos" },
  { valor: "4", label: "Personas en el equipo" },
];

const teamMembers = [
  { nombre: "Mauricio Badino", rol: "Rol" },
  { nombre: "Franco Mongilardi", rol: "Rol" },
  { nombre: "Pedro Badino", rol: "Rol" },
  { nombre: "Julio Cabrera", rol: "Rol" },
];

function Nosotros() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-roto)" }}>

      {/* Hero */}
      <div
        className="grain-section relative py-32 px-6 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url(${equipoImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 57%",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(27,58,32,0.88) 0%, rgba(27,58,32,0.7) 50%, rgba(27,58,32,0.95) 100%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
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
              Nuestra empresa
            </span>
            <div className="h-px w-10" style={{ backgroundColor: "var(--color-dorado)", opacity: 0.7 }} />
          </div>
          <h1
            className="text-white leading-none mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              letterSpacing: "0.04em",
            }}
          >
            Quiénes Somos
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
            }}
          >
            Más de 30 años acompañando al productor argentino con maquinaria,
            servicio y confianza.
          </p>
        </div>
      </div>

      {/* Historia + Stats */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-roto)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                Nuestra historia
              </span>
            </div>
            <h2
              className="leading-none mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "0.04em",
                color: "var(--color-carbon)",
              }}
            >
              Desde ---, trabajando para el campo
            </h2>
            {[
              "------------------------------------------------------------------------------------------------------------------------------",
              "------------------------------------------------------------------------------------------------------------------------------",
              "------------------------------------------------------------------------------------------------------------------------------",
            ].map((p, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.05rem",
                  color: "#666",
                  lineHeight: 1.75,
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {statItems.map((s) => (
              <div
                key={s.label}
                className="p-6 text-center"
                style={{
                  backgroundColor: "var(--color-campo)",
                  borderBottom: "3px solid var(--color-dorado)",
                }}
              >
                <p
                  className="leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.8rem",
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
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-crema)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
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
                Las personas detrás
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                letterSpacing: "0.04em",
                color: "var(--color-carbon)",
              }}
            >
              Nuestro equipo
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {teamMembers.map((p, i) => (
              <div
                key={i}
                className="text-center group"
                style={{
                  backgroundColor: "var(--color-roto)",
                  padding: "24px 16px",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderBottomColor = "var(--color-dorado)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderBottomColor = "transparent"; }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 overflow-hidden"
                  style={{
                    border: "2px solid rgba(200,146,26,0.3)",
                    borderRadius: "2px",
                  }}
                >
                  <img src={equipoImg} alt={p.nombre} className="w-full h-full object-cover" />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    letterSpacing: "0.04em",
                    color: "var(--color-carbon)",
                  }}
                >
                  {p.nombre}
                </p>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-dorado)",
                  }}
                >
                  {p.rol}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        className="grain-section py-20 px-6 text-center"
        style={{ backgroundColor: "var(--color-campo)" }}
      >
        <h3
          className="text-white leading-none mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            letterSpacing: "0.04em",
          }}
        >
          Conectá con nosotros
        </h3>
        <p
          className="mb-8"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Visitanos o consultanos por WhatsApp. Estamos para ayudarte.
        </p>
        <Link to="/contacto" className="btn-primary">
          Contactanos
        </Link>
      </div>
    </div>
  );
}

export default Nosotros;
