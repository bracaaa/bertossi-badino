import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/maquinarias", label: "Maquinarias" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--color-campo)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Gold accent stripe */}
      <div className="h-[2px]" style={{ backgroundColor: "var(--color-dorado)" }} />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-[2px] rounded-full transition-all duration-300 group-hover:h-11"
            style={{
              height: "36px",
              backgroundColor: "var(--color-dorado)",
            }}
          />
          <div className="leading-none select-none">
            <p
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                letterSpacing: "0.1em",
              }}
            >
              Bertossi <span style={{ color: "var(--color-dorado)" }}>&amp;</span> Badino
            </p>
            <p
              className="mt-0.5 leading-none"
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                color: "rgba(255,255,255,0.38)",
                textTransform: "uppercase",
              }}
            >
              Maquinaria Agrícola · El Tío, Cba.
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `bb-nav-link${isActive ? " active" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className="ml-2 btn-primary"
            style={{ padding: "10px 22px", fontSize: "10px" }}
          >
            Consultar
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none p-1 flex flex-col gap-[5px]"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <span
            className="block w-5 h-[1.5px] bg-current origin-center transition-transform duration-300"
            style={{ transform: menuAbierto ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-[1.5px] bg-current transition-opacity duration-300"
            style={{ opacity: menuAbierto ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] bg-current origin-center transition-transform duration-300"
            style={{ transform: menuAbierto ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuAbierto ? "400px" : "0",
          backgroundColor: "#0D1F10",
        }}
      >
        <div className="px-6 py-4 flex flex-col">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setMenuAbierto(false)}
              className={({ isActive }) =>
                `py-3.5 flex items-center justify-between border-b ${
                  isActive ? "bb-nav-link active" : "bb-nav-link"
                }`
              }
              style={{ borderBottomColor: "rgba(255,255,255,0.07)" }}
            >
              {l.label}
              <span style={{ color: "var(--color-dorado)", fontSize: "12px" }}>→</span>
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
