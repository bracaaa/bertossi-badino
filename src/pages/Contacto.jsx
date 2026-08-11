import { useState } from "react";
import { WP_NUMBER } from "../config";
import iconPin from "../assets/icons/pin.png";
import iconPhone from "../assets/icons/phone.png";
import iconClock from "../assets/icons/clock-11.png";

const inputStyle = {
  width: "100%",
  backgroundColor: "var(--color-roto)",
  border: "1.5px solid rgba(0,0,0,0.1)",
  borderRadius: "2px",
  padding: "12px 16px",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  color: "var(--color-carbon)",
  outline: "none",
  transition: "border-color 0.2s",
};

function StyledInput({ as: Tag = "input", onFocusStyle, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <Tag
      {...props}
      style={{
        ...inputStyle,
        ...(props.style || {}),
        borderColor: focused ? "var(--color-dorado)" : "rgba(0,0,0,0.1)",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function Contacto() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", interes: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Hola! Mi nombre es ${form.nombre}. Teléfono: ${form.telefono}. Email: ${form.email}. Me interesa: ${form.interes}. Mensaje: ${form.mensaje}`;
    window.open(`https://wa.me/${WP_NUMBER}?text=${encodeURIComponent(texto)}`, "_blank");
    setEnviado(true);
  };

  const contactInfo = [
    { icono: iconPin,   label: "Dirección", val: "Sarmiento 32, El Tío, Córdoba, Argentina." },
    { icono: iconPhone, label: "Teléfono",  val: "+54 9 3576 44-0800" },
    { icono: iconClock, label: "Horario",   val: "Lun–Vie: 08:00–12:00 · 15:30–19:30" },
  ];

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
          Estamos para ayudarte
        </p>
        <h1
          className="text-white leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            letterSpacing: "0.04em",
          }}
        >
          Contacto
        </h1>
        <p
          className="mt-4 max-w-xl mx-auto"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Completá el formulario y te respondemos a la brevedad, o escribinos por WhatsApp.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Formulario */}
        <div
          className="p-8"
          style={{
            backgroundColor: "white",
            border: "1px solid rgba(0,0,0,0.07)",
            borderRadius: "2px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          }}
        >
          {enviado ? (
            <div className="text-center py-14">
              <div
                className="w-14 h-14 mx-auto mb-5 flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-campo)",
                  borderRadius: "2px",
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2
                className="mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  letterSpacing: "0.04em",
                  color: "var(--color-campo)",
                }}
              >
                ¡Mensaje enviado!
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "#777",
                }}
              >
                Te redirigimos a WhatsApp. Un asesor te responderá a la brevedad.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-6"
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "9.5px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-dorado)",
                }}
              >
                Enviar otra consulta →
              </button>
            </div>
          ) : (
            <>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  letterSpacing: "0.04em",
                  color: "var(--color-carbon)",
                }}
              >
                Envianos tu consulta
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    className="block mb-1.5"
                    style={{ fontFamily: "var(--font-label)", fontSize: "9.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}
                  >
                    Nombre completo *
                  </label>
                  <StyledInput
                    type="text" name="nombre" required value={form.nombre}
                    onChange={handleChange} placeholder="Nombre Apellido"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-1.5"
                      style={{ fontFamily: "var(--font-label)", fontSize: "9.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}
                    >
                      Teléfono
                    </label>
                    <StyledInput
                      type="tel" name="telefono" value={form.telefono}
                      onChange={handleChange} placeholder="+54 9 3576 ..."
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1.5"
                      style={{ fontFamily: "var(--font-label)", fontSize: "9.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}
                    >
                      Email
                    </label>
                    <StyledInput
                      type="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="mail@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-1.5"
                    style={{ fontFamily: "var(--font-label)", fontSize: "9.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}
                  >
                    ¿Qué te interesa?
                  </label>
                  <StyledInput
                    as="select" name="interes" value={form.interes} onChange={handleChange}
                  >
                    <option value="">Seleccioná una opción...</option>
                    <option>Tractores</option>
                    <option>Cosechadoras</option>
                    <option>Mixers</option>
                    <option>Enbolsadoras</option>
                    <option>Moledoras</option>
                    <option>Implementos</option>
                    <option>Repuestos</option>
                    <option>Financiación</option>
                  </StyledInput>
                </div>

                <div>
                  <label
                    className="block mb-1.5"
                    style={{ fontFamily: "var(--font-label)", fontSize: "9.5px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888" }}
                  >
                    Mensaje
                  </label>
                  <StyledInput
                    as="textarea" name="mensaje" rows={4} value={form.mensaje}
                    onChange={handleChange} placeholder="Contanos qué necesitás..."
                    style={{ resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </>
          )}
        </div>

        {/* Info + Mapa */}
        <div className="flex flex-col gap-6">
          <div
            className="p-8"
            style={{
              backgroundColor: "white",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: "2px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <h2
              className="mb-7"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                letterSpacing: "0.04em",
                color: "var(--color-carbon)",
              }}
            >
              Información de contacto
            </h2>
            <ul className="space-y-5">
              {contactInfo.map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--color-crema)",
                      border: "1px solid rgba(200,146,26,0.2)",
                      borderRadius: "2px",
                    }}
                  >
                    <img src={c.icono} alt={c.label} className="w-4 h-4 object-contain" />
                  </div>
                  <div>
                    <p
                      className="mb-0.5"
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--color-dorado)",
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        color: "#555",
                        lineHeight: 1.5,
                      }}
                    >
                      {c.val}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa */}
          <div
            className="overflow-hidden flex-1"
            style={{ minHeight: "220px", borderRadius: "2px", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <iframe
              title="Ubicación Bertossi Badino"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.07742096264!2d-62.825824!3d-31.384428699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943355f53eb9a7f7%3A0x8388119d4d3a7ca3!2sBertossi%20%26%20Badino!5e0!3m2!1ses-419!2sar!4v1781236476020!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "220px", display: "block" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
