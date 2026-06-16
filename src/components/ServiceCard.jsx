function ServiceCard({ servicio }) {
  const { icono, imagen, titulo, descripcion } = servicio;

  return (
    <div
      className="group relative bg-roto p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--color-roto)",
        borderLeft: "2px solid transparent",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        boxShadow: "0 1px 12px rgba(0,0,0,0.07)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderLeftColor = "var(--color-dorado)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderLeftColor = "transparent";
        e.currentTarget.style.boxShadow = "0 1px 12px rgba(0,0,0,0.07)";
      }}
    >
      {/* Icon */}
      <div
        className="mb-5 inline-flex items-center justify-center w-12 h-12"
        style={{
          backgroundColor: "var(--color-crema)",
          border: "1px solid rgba(200,146,26,0.25)",
        }}
      >
        {imagen ? (
          <img src={imagen} alt={titulo} className="w-6 h-6 object-contain" />
        ) : (
          <span className="text-2xl">{icono}</span>
        )}
      </div>

      {/* Title */}
      <h3
        className="mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          letterSpacing: "0.05em",
          color: "var(--color-campo)",
        }}
      >
        {titulo}
      </h3>

      {/* Divider */}
      <div
        className="mb-3 h-px w-8 transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: "var(--color-dorado)" }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "#555",
          lineHeight: "1.65",
        }}
      >
        {descripcion}
      </p>
    </div>
  );
}

export default ServiceCard;
