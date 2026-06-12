import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { maquinas } from "../data/maquinas";
import calendarIcon from "../assets/icons/calendar.png";

function ProductoDetalle() {
  const { id } = useParams();
  const [modalAbierto, setModalAbierto] = useState(false);
  const maquina = maquinas.find((m) => m.id === Number(id));

  if (!maquina) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 gap-4">
        <p className="text-2xl font-bold">Producto no encontrado</p>
        <Link to="/maquinarias" className="text-green-700 hover:underline">
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  const { nombre, categoria, precio, estado, año, imagen, descripcion, caracteristicas } = maquina;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal imagen */}
      {modalAbierto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalAbierto(false)}
        >
          <img src={imagen} alt={nombre} className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl" />
          <button className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-400">✕</button>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b px-6 py-2 text-xs text-gray-500">
        <div className="max-w-5xl mx-auto flex gap-2 items-center">
          <Link to="/" className="hover:text-green-700">Inicio</Link>
          <span>/</span>
          <Link to="/maquinarias" className="hover:text-green-700">Maquinarias</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{nombre}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagen */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-zoom-in relative group"
            onClick={() => setModalAbierto(true)}
          >
            <img src={imagen} alt={nombre} className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full transition-all">
                🔍 Ver más grande
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex gap-2 mb-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${estado === "Nuevo" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                {estado}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                {categoria}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 leading-tight">
              {nombre}
            </h1>

            <div className="flex gap-4 text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <img src={calendarIcon} alt="año" className="w-3.5 h-3.5 object-contain" />
                Año: <strong className="text-gray-700">{año}</strong>
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">{descripcion}</p>

            <p className="text-3xl font-extrabold text-green-700 mb-4">
              USD {precio.toLocaleString("es-AR")}
            </p>

            {/* Caracteristicas */}
            <div className="bg-green-50 rounded-xl p-4 mb-4">
              <h3 className="font-bold text-green-800 text-sm mb-2">Características principales</h3>
              <ul className="space-y-1.5">
                {caracteristicas.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-gray-700">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
              <a
                href={`https://wa.me/5493576440800?text=Hola,%20me%20interesa%20el%20${encodeURIComponent(nombre)}.%20¿Podría%20darme%20más%20información?`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-3 rounded-xl font-bold text-sm transition-colors shadow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
              <Link
                to="/contacto"
                className="flex-1 text-center border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white py-3 rounded-xl font-bold text-sm transition-colors"
              >
                Enviar consulta
              </Link>
            </div>
          </div>
        </div>

        {/* Máquinas relacionadas */}
        <div className="mt-10">
          <h2 className="text-lg font-extrabold text-gray-800 mb-4">También te puede interesar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {maquinas
              .filter((m) => m.categoria === categoria && m.id !== maquina.id)
              .slice(0, 3)
              .map((m) => (
                <div key={m.id} className="bg-white rounded-xl shadow overflow-hidden flex gap-3 p-3 hover:shadow-md transition-all">
                  <img src={m.imagen} alt={m.nombre} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex flex-col justify-between">
                    <p className="font-semibold text-gray-800 text-xs leading-tight">{m.nombre}</p>
                    <p className="text-green-700 font-bold text-xs">USD {m.precio.toLocaleString("es-AR")}</p>
                    <Link to={`/maquinarias/${m.id}`} className="text-xs text-green-700 hover:underline font-semibold">
                      Ver detalle →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
