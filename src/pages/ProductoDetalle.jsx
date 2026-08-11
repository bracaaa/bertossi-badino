import { useState, useEffect, useRef } from "react";
import { WP_NUMBER } from "../config";
import { useParams, Link } from "react-router-dom";
import { maquinas } from "../data/maquinas";

function ProductoDetalle() {
  const { id } = useParams();
  const [modalAbierto, setModalAbierto] = useState(false);
  const imageWrapRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const NAVBAR = 80;
    const imgWrap = imageWrapRef.current;
    const row = rowRef.current;
    if (!imgWrap || !row) return;

    const onScroll = () => {
      const rowRect = row.getBoundingClientRect();
      const imgHeight = imgWrap.offsetHeight;
      const imgWidth = imgWrap.offsetWidth;

      if (rowRect.top <= NAVBAR && rowRect.bottom > imgHeight + NAVBAR) {
        imgWrap.style.position = "fixed";
        imgWrap.style.top = NAVBAR + "px";
        imgWrap.style.width = imgWidth + "px";
      } else {
        imgWrap.style.position = "";
        imgWrap.style.top = "";
        imgWrap.style.width = "";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const maquina = maquinas.find((m) => m.id === Number(id));

  if (!maquina) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "var(--color-roto)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2.5rem",
            letterSpacing: "0.04em",
            color: "rgba(0,0,0,0.2)",
          }}
        >
          Producto no encontrado
        </p>
        <Link
          to="/maquinarias"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-dorado)",
          }}
        >
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  const { nombre, categoria, precio, estado, año, imagen, descripcion, caracteristicas } = maquina;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-roto)" }}>

      {/* Image modal */}
      {modalAbierto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
          onClick={() => setModalAbierto(false)}
        >
          <img
            src={imagen}
            alt={nombre}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            style={{ boxShadow: "0 20px 80px rgba(0,0,0,0.6)" }}
          />
          <button
            className="absolute top-5 right-5 text-white transition-colors"
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "8px 14px",
              borderRadius: "2px",
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
          >
            ✕ CERRAR
          </button>
        </div>
      )}

      {/* Breadcrumb */}
      <div
        className="border-b px-6 py-3"
        style={{
          backgroundColor: "white",
          borderColor: "rgba(0,0,0,0.07)",
        }}
      >
        <div className="max-w-5xl mx-auto flex gap-2 items-center">
          {[
            { to: "/", label: "Inicio" },
            { to: "/maquinarias", label: "Maquinarias" },
            { to: null, label: nombre },
          ].map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && (
                <span style={{ color: "rgba(0,0,0,0.2)", fontFamily: "var(--font-label)", fontSize: "9px" }}>
                  /
                </span>
              )}
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.4)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--color-dorado)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(0,0,0,0.4)"; }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-carbon)",
                  }}
                >
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Top: imagen + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

          {/* Imagen */}
          <div
            className="overflow-hidden cursor-zoom-in group relative"
            onClick={() => setModalAbierto(true)}
            style={{ border: "1px solid rgba(0,0,0,0.07)", borderRadius: "2px", backgroundColor: "white" }}
          >
            <img
              src={imagen}
              alt={nombre}
              className="w-full object-contain p-6"
              style={{ height: "380px" }}
            />
            <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(27,58,32,0.6) 0%, transparent 60%)" }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: "9.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "white", backgroundColor: "rgba(0,0,0,0.4)", padding: "6px 12px", borderRadius: "1px" }}>
                Ver más grande
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                { label: estado, gold: estado === "Nuevo" },
                { label: categoria, gold: false },
                { label: `Año ${año}`, gold: false },
              ].map(({ label, gold }) => (
                <span key={label} style={{ fontFamily: "var(--font-label)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "2px", backgroundColor: gold ? "var(--color-dorado)" : "var(--color-crema)", color: gold ? "var(--color-campo)" : "#666", border: `1px solid ${gold ? "var(--color-dorado)" : "rgba(0,0,0,0.1)"}` }}>
                  {label}
                </span>
              ))}
            </div>

            <h1 className="mb-4 leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "0.04em", color: "var(--color-carbon)" }}>
              {nombre}
            </h1>

            <p className="mb-5" style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", color: "#666", lineHeight: 1.75 }}>
              {descripcion}
            </p>

            <div className="flex items-baseline gap-2 mb-6 py-4 border-t border-b" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: "10px", letterSpacing: "0.2em", color: "var(--color-dorado)" }}>USD</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", color: "var(--color-campo)", letterSpacing: "0.03em", lineHeight: 1 }}>
                {precio.toLocaleString("es-AR")}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <a href={`https://wa.me/${WP_NUMBER}?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(nombre)}.%20¿Podría%20darme%20más%20información?`} target="_blank" rel="noreferrer" className="flex-1 btn-primary flex items-center justify-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
              <Link to="/contacto" className="flex-1 btn-ghost-dark flex items-center justify-center">
                Enviar consulta
              </Link>
            </div>
          </div>
        </div>

        {/* Relacionados */}
        {maquinas.filter((m) => m.categoria === categoria && m.id !== maquina.id).length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ backgroundColor: "var(--color-dorado)", opacity: 0.7 }} />
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.8rem",
                  letterSpacing: "0.04em",
                  color: "var(--color-carbon)",
                }}
              >
                También te puede interesar
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {maquinas
                .filter((m) => m.categoria === categoria && m.id !== maquina.id)
                .slice(0, 3)
                .map((m) => (
                  <Link
                    key={m.id}
                    to={`/maquinarias/${m.id}`}
                    className="flex gap-4 p-3 group transition-all duration-200"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "2px",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(200,146,26,0.4)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <img
                      src={m.imagen}
                      alt={m.nombre}
                      className="w-20 h-20 object-cover shrink-0"
                      style={{ borderRadius: "2px" }}
                    />
                    <div className="flex flex-col justify-between py-0.5">
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          letterSpacing: "0.03em",
                          color: "var(--color-carbon)",
                          lineHeight: 1.3,
                        }}
                      >
                        {m.nombre}
                      </p>
                      <div>
                        <span
                          style={{
                            fontFamily: "var(--font-label)",
                            fontSize: "8.5px",
                            letterSpacing: "0.15em",
                            color: "var(--color-dorado)",
                            textTransform: "uppercase",
                          }}
                        >
                          USD{" "}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.2rem",
                            color: "var(--color-campo)",
                          }}
                        >
                          {m.precio.toLocaleString("es-AR")}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductoDetalle;
