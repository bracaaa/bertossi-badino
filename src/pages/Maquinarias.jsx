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

    if (categoriaActiva !== "Todos") {
      lista = lista.filter((m) => m.categoria === categoriaActiva);
    }
    if (estadoFiltro !== "Todos") {
      lista = lista.filter((m) => m.estado === estadoFiltro);
    }
    if (busqueda.trim()) {
      const q = busqueda.toLowerCase();
      lista = lista.filter(
        (m) =>
          m.nombre.toLowerCase().includes(q) ||
          m.categoria.toLowerCase().includes(q)
      );
    }
    if (orden === "precio-asc") lista.sort((a, b) => a.precio - b.precio);
    if (orden === "precio-desc") lista.sort((a, b) => b.precio - a.precio);
    if (orden === "año-desc") lista.sort((a, b) => b.año - a.año);

    return lista;
  }, [categoriaActiva, estadoFiltro, orden, busqueda]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-800 text-white py-14 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Nuestro Catálogo</h1>
        <p className="text-green-200 text-lg max-w-xl mx-auto">
          Maquinaria agrícola nueva y usada. Encontrá lo que tu campo necesita.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Buscador */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre o categoría..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full md:w-96 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 mb-4">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCategoriaActiva(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                categoriaActiva === c
                  ? "bg-green-700 text-white shadow"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-500 hover:text-green-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Subfilros y orden */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex gap-2">
            {["Todos", "Nuevo", "Usado"].map((e) => (
              <button
                key={e}
                onClick={() => setEstadoFiltro(e)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  estadoFiltro === e
                    ? "bg-yellow-400 text-green-900"
                    : "bg-white border border-gray-200 text-gray-500 hover:border-yellow-400"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="ml-auto border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="default">Ordenar por...</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="año-desc">Más recientes</option>
          </select>
        </div>

        {/* Grid o vacío */}
        {filtradas.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl font-semibold">No se encontraron productos</p>
            <p className="text-sm mt-2">Probá con otros filtros o contactanos para buscar lo que necesitás.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6">
              {filtradas.length} {filtradas.length === 1 ? "resultado" : "resultados"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
