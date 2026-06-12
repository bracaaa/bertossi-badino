import { Link } from "react-router-dom";
import iconPin from "../assets/icons/pin.png";
import iconPhone from "../assets/icons/phone.png";
import iconClock from "../assets/icons/clock-11.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-xm font-extrabold tracking-tight drop-shadow">Bertossi<span className="text-yellow-400">&</span>Badino</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Más de -- años acompañando al productor argentino con maquinaria agrícola de calidad, servicio técnico y financiación.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navegación</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Inicio" },
              { to: "/maquinarias", label: "Maquinarias" },
              { to: "/nosotros", label: "Nosotros" },
              { to: "/contacto", label: "Contacto" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-yellow-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src={iconPin} alt="Dirección" className="w-4 h-4 object-contain shrink-0" />
              <span>Sarmiento 32, El Tío, Cordoba, Argentina.</span>
            </li>
            <li className="flex items-center gap-2">
              <img src={iconPhone} alt="Teléfono" className="w-4 h-4 object-contain shrink-0" />
              <a href="tel:+5493576440800" className="hover:text-yellow-400 transition-colors">
                +54 9 3576 44-0800
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={iconClock} alt="Horario" className="w-4 h-4 object-contain shrink-0" />
              <span>Lun–Vie: 08:00 a 12:00 hs y de 15:30 a 19:30 hs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Bertossi Badino Maquinaria Agrícola. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
