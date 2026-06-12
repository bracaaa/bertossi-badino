import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/maquinarias", label: "Maquinarias/Productos" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white text-xl font-extrabold tracking-tight drop-shadow">Bertossi<span className="text-yellow-400">&</span>Badino</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider transition-colors hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 border-b-2 border-yellow-400 pb-0.5" : "text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className="ml-2 bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors"
          >
            Consultar
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuAbierto && (
        <div className="md:hidden bg-green-900 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuAbierto(false)}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider py-2 border-b border-green-700 ${
                  isActive ? "text-yellow-400" : "text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
