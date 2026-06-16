import { Link } from "react-router-dom";
import iconPin from "../assets/icons/pin.png";
import iconPhone from "../assets/icons/phone.png";
import iconClock from "../assets/icons/clock-11.png";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/maquinarias", label: "Maquinarias" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

const contactInfo = [
  { icono: iconPin,   label: "Dirección", val: "Sarmiento 32, El Tío, Córdoba, Argentina." },
  { icono: iconPhone, label: "Teléfono",  val: "+54 9 3576 44-0800" },
  { icono: iconClock, label: "Horario",   val: "Lun–Vie: 08:00–12:00 · 15:30–19:30" },
];

function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D1F10", color: "#9CA89D" }}>
      {/* Gold top accent */}
      <div className="h-[2px]" style={{ background: "linear-gradient(to right, var(--color-dorado), transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-[2px] h-9 rounded-full" style={{ backgroundColor: "var(--color-dorado)" }} />
            <div>
              <p
                className="text-white leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  letterSpacing: "0.1em",
                }}
              >
                Bertossi <span style={{ color: "var(--color-dorado)" }}>&amp;</span> Badino
              </p>
              <p
                className="mt-0.5"
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "8px",
                  letterSpacing: "0.28em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                }}
              >
                El Tío, Cba.
              </p>
            </div>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
            }}
          >
            Más de 30 años acompañando al productor argentino con maquinaria
            agrícola de calidad, servicio técnico y financiación a medida.
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <h4
            className="mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              letterSpacing: "0.12em",
              color: "white",
            }}
          >
            Navegación
          </h4>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group flex items-center gap-2 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--color-dorado)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
                >
                  <span
                    className="inline-block w-4 h-px transition-all duration-300 group-hover:w-6"
                    style={{ backgroundColor: "var(--color-dorado)", opacity: 0.6 }}
                  />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h4
            className="mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              letterSpacing: "0.12em",
              color: "white",
            }}
          >
            Contacto
          </h4>
          <ul className="space-y-4">
            {contactInfo.map((c) => (
              <li key={c.label} className="flex items-start gap-3">
                <div
                  className="shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
                  style={{
                    backgroundColor: "rgba(200,146,26,0.12)",
                    border: "1px solid rgba(200,146,26,0.2)",
                    borderRadius: "2px",
                  }}
                >
                  <img src={c.icono} alt={c.label} className="w-3.5 h-3.5 object-contain opacity-70" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "8.5px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--color-dorado)",
                      marginBottom: "2px",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    {c.val}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t text-center py-5 px-6"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "9px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          © {new Date().getFullYear()} Bertossi Badino Maquinaria Agrícola — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
