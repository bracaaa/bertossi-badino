import { Link } from "react-router-dom";
import equipoImg from "../assets/equipo.jpg.jpeg";

function Nosotros() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative py-30 px-6 text-white text-center"
        style={{
          backgroundImage: `url(${equipoImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 57%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-900/60 to-green-900/95" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">Quiénes Somos</h1>
          <p className="text-green-200 text-xl">
            Más de 30 años acompañando al productor argentino con maquinaria, servicio y confianza.
          </p>
        </div>
      </div>

      {/* Historia */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-700 font-semibold uppercase tracking-widest text-sm">Nuestra historia</span>
            <h2 className="text-3xl font-extrabold text-gray-800 mt-2 mb-4">
              Desde ---, trabajando para el campo
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <p className="text-gray-600 leading-relaxed">
              --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { valor: "---", label: "Año de fundación" },
              { valor: "+---", label: "Máquinas vendidas" },
              { valor: "+---", label: "Clientes activos" },
              { valor: "4", label: "Personas en el equipo" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-green-700 text-white rounded-2xl p-6 text-center shadow-lg"
              >
                <p className="text-4xl font-extrabold text-yellow-400">{s.valor}</p>
                <p className="text-sm mt-1 text-green-100">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold uppercase tracking-widest text-sm">Las personas detrás</span>
            <h2 className="text-3xl font-extrabold text-gray-800 mt-2">Nuestro equipo</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { nombre: "Mauricio Badino", rol: "Rol" },
              { nombre: "Franco Mongilardi", rol: "Rol" },
              { nombre: "Pedro Badino", rol: "Rol" },
              { nombre: "Julio Cabrera", rol: "Rol" },
            ].map((p, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-6 shadow hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-3 overflow-hidden">
                  <img src={equipoImg} alt={p.nombre} className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-gray-800">{p.nombre}</p>
                <p className="text-sm text-green-700">{p.rol}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-green-800 text-white py-14 px-6 text-center">
        <h3 className="text-3xl font-extrabold mb-4">Conectá con nosotros</h3>
        <p className="text-green-200 mb-8">Visitanos en nuestro espacio o consultanos por WhatsApp.</p>
        <Link
          to="/contacto"
          className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all"
        >
          Contactanos
        </Link>
      </div>
    </div>
  );
}

export default Nosotros;
