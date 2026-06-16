import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ maquina }) {
  const { id, nombre, categoria, precio, estado, año, imagen } = maquina;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-white flex flex-col overflow-hidden transition-all duration-300"
      style={{
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.14)"
          : "0 2px 12px rgba(0,0,0,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        border: hovered
          ? "1px solid rgba(200,146,26,0.45)"
          : "1px solid rgba(0,0,0,0.07)",
        borderRadius: "4px",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        {/* Dark overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(27,58,32,0.55) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0.4,
          }}
        />

        {/* Badges */}
        <span
          className="absolute top-3 left-3 px-2 py-1"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            backgroundColor: estado === "Nuevo" ? "var(--color-dorado)" : "rgba(255,255,255,0.9)",
            color: estado === "Nuevo" ? "var(--color-campo)" : "var(--color-tierra)",
            borderRadius: "2px",
            fontWeight: 500,
          }}
        >
          {estado}
        </span>
        <span
          className="absolute top-3 right-3 px-2 py-1"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            backgroundColor: "rgba(255,255,255,0.92)",
            color: "var(--color-campo)",
            borderRadius: "2px",
            fontWeight: 500,
          }}
        >
          {categoria}
        </span>

        {/* Año badge bottom */}
        <span
          className="absolute bottom-3 left-3"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {año}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="mb-3 leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.35rem",
            letterSpacing: "0.04em",
            color: "var(--color-carbon)",
          }}
        >
          {nombre}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-4">
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "9px",
              letterSpacing: "0.15em",
              color: "var(--color-dorado)",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            USD
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.7rem",
              color: "var(--color-campo)",
              letterSpacing: "0.03em",
              lineHeight: 1,
            }}
          >
            {precio.toLocaleString("es-AR")}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <Link
            to={`/maquinarias/${id}`}
            className="flex-1 text-center py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200"
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              backgroundColor: "var(--color-campo)",
              color: "white",
              borderRadius: "2px",
            }}
          >
            Ver detalle
          </Link>
          <a
            href={`https://wa.me/5493576440800?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(nombre)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center px-3 transition-colors duration-200"
            style={{
              backgroundColor: "#25D366",
              borderRadius: "2px",
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#1ebe5d"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "#25D366"; }}
            title="Consultar por WhatsApp"
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
