import { Link } from "react-router-dom";
import lugarImg from "../assets/lugar.png";

function Hero() {
  return (
    <section
      className="relative flex flex-col text-white overflow-hidden"
      style={{
        backgroundImage: `url(${lugarImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-900/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <span className="inline-block bg-yellow-400 text-green-900 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-5">
          Maquinaria Nueva y Usada
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-xl">
          Tu campo merece <span className="text-yellow-400">lo mejor</span>
        </h1>
        <p className="text-base md:text-lg text-green-100 mb-8 max-w-2xl mx-auto">
          Tractores, cosechadoras, sembradoras y más. Más de 30 años acompañando al productor argentino con la mejor maquinaria agrícola.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/maquinarias"
            className="bg-yellow-400 text-green-900 px-7 py-3 rounded-full font-bold text-base hover:bg-yellow-300 transition-all shadow-xl hover:scale-105"
          >
            Ver Maquinarias/Productos
          </Link>
          <Link
            to="/contacto"
            className="border-2 border-white text-white px-7 py-3 rounded-full font-bold text-base hover:bg-white hover:text-green-900 transition-all"
          >
            Consultar Ahora
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 bg-green-900/80 backdrop-blur-sm py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
          {[
            { valor: "+--", label: "Años de experiencia" },
            { valor: "+---", label: "Ventas" },
            { valor: "+200", label: "Clientes activos" },
            { valor: "100%", label: "Financiación disponible" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-yellow-400">{s.valor}</p>
              <p className="text-xs text-green-200 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
