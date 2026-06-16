import { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import { maquinas, categorias } from "../data/maquinas";

function Maquinarias() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [estadoFiltro, setEstadoFiltro] = useState("Todos");
  const [orden, setOrden] = useState("default");
  const [busqueda, setBusqueda] = useState("");

  const filtradas = useMemo(() => {
    let lista = [...maquinas];
    if (categoriaActiva !== "Todos") lista = lista.filter((m) => m.categoria === categoriaActiva);
    if (estadoFiltro !== "Todos") lista = lista.filter((m) => m.estado === estadoFiltro);
    if (busqueda.trim()) {
      const q = busqueda.toLowerCase();
      lista = lista.filter(
        (m) => m.nombre.toLowerCase().includes(q) || m.categoria.toLowerCase().includes(q)
      );
    }
    if (orden === "precio-asc") lista.sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") lista.sort((a, b) => b.precio - a.precio);
    if (orden === "año-desc") lista.sort((a, b) => b.año - a.año);
    return lista;
  }, [categoriaActiva, estadoFiltro, orden, busqueda]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-roto)" }}>
      {/* Header */}
      <div
        className="grain-section py-20 px-6 text-white text-center"
        style={{ backgroundColor: "var(--color-campo)" }}
      >
        <p
          className="mb-3"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--color-dorado)",
          }}
        >
          Equipamiento agrícola
        </p>
        <h1
          className="text-white leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            letterSpacing: "0.04em",
          }}
        >
          Nuestro Catálogo
        </h1>
        <p
          className="mt-4 max-w-xl mx-auto"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Maquinaria agrícola nueva y usada. Encontrá lo que tu campo necesita.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search + order row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-4 pr-4 py-3 outline-none transition-all"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                backgroundColor: "white",
                border: "1.5px solid rgba(0,0,0,0.12)",
                borderRadius: "2px",
                color: "var(--color-carbon)",
              }}
              onFocus={e => { e.target.style.borderColor = "var(--color-dorado)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; }}
            />
          </div>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="outline-none cursor-pointer transition-all"
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1.5px solid rgba(0,0,0,0.12)",
              borderRadius: "2px",
              padding: "12px 16px",
              backgroundColor: "white",
              color: "var(--color-carbon)",
            }}
            onFocus={e => { e.target.style.borderColor = "var(--color-dorado)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.12)"; }}
          >
            <option value="default">Ordenar...</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="año-desc">Más recientes</option>
          </select>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoriaActiva(c)}
              className="px-4 py-2 transition-all duration-200"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "2px",
                border: categoriaActiva === c
                  ? "1.5px solid var(--color-campo)"
                  : "1.5px solid rgba(0,0,0,0.12)",
                backgroundColor: categoriaActiva === c
                  ? "var(--color-campo)"
                  : "white",
                color: categoriaActiva === c ? "white" : "rgba(0,0,0,0.55)",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Estado filters */}
        <div className="flex gap-2 mb-10">
          {["Todos", "Nuevo", "Usado"].map((e) => (
            <button
              key={e}
              onClick={() => setEstadoFiltro(e)}
              className="px-3 py-1.5 transition-all duration-200"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "9.5px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: "2px",
                border: estadoFiltro === e
                  ? "1.5px solid var(--color-dorado)"
                  : "1.5px solid rgba(0,0,0,0.1)",
                backgroundColor: estadoFiltro === e
                  ? "var(--color-dorado)"
                  : "transparent",
                color: estadoFiltro === e ? "var(--color-campo)" : "rgba(0,0,0,0.45)",
              }}
            >
              {e}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtradas.length === 0 ? (
          <div className="text-center py-28">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "rgba(0,0,0,0.2)",
                letterSpacing: "0.05em",
              }}
            >
              Sin resultados
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                color: "rgba(0,0,0,0.35)",
              }}
            >
              Probá con otros filtros o contactanos para buscar lo que necesitás.
            </p>
          </div>
        ) : (
          <>
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "9.5px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.35)",
              }}
            >
              {filtradas.length} {filtradas.length === 1 ? "resultado" : "resultados"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtradas.map((m) => (
                <ProductCard key={m.id} maquina={m} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Maquinarias;
