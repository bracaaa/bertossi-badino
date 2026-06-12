import { useState } from "react";
import iconPin from "../assets/icons/pin.png";
import iconPhone from "../assets/icons/phone.png";
import iconClock from "../assets/icons/clock-11.png";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    interes: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Hola! Mi nombre es ${form.nombre}. Teléfono: ${form.telefono}. Email: ${form.email}. Me interesa: ${form.interes}. Mensaje: ${form.mensaje}`;
    window.open(
      `https://wa.me/5493576440800?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Contacto</h1>
        <p className="text-green-200 text-lg max-w-xl mx-auto">
          Completá el formulario y te respondemos a la brevedad, o escribinos directamente por WhatsApp.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {enviado ? (
            <div className="text-center py-12">
              <p className="text-6xl mb-4">✅</p>
              <h2 className="text-2xl font-bold text-green-700 mb-2">¡Mensaje enviado!</h2>
              <p className="text-gray-500">
                Te redirigimos a WhatsApp. Un asesor te responderá a la brevedad.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-6 text-green-700 hover:underline text-sm font-semibold"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Envianos tu consulta</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre Apellido"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+54 9 3576 ..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="mail@gmail.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    ¿Qué te interesa?
                  </label>
                  <select
                    name="interes"
                    value={form.interes}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Seleccioná una opción...</option>
                    <option>Tractores</option>
                    <option>Cosechadoras</option>
                    <option>Sembradoras</option>
                    <option>Pulverizadoras</option>
                    <option>Implementos</option>
                    <option>Repuestos</option>
                    <option>Tasación de usados</option>
                    <option>Financiación</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos qué necesitás..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </>
          )}
        </div>

        {/* Info de contacto */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-xl font-extrabold text-gray-800 mb-6">Información de contacto</h2>
            <ul className="space-y-4 text-sm">
              {[
                { icono: iconPin, titulo: "Dirección", val: "Sarmiento 32, El Tío, Cordoba, Argentina." },
                { icono: iconPhone, titulo: "Teléfono", val: "+54 9 3576 44-0800" },
                { icono: iconClock, titulo: "Horario", val: "Lun–Vie: 08:00 a 12:00 hs y de 15:30 a 19:30 hs" },
              ].map((c) => (
                <li key={c.titulo} className="flex items-start gap-4">
                  <img src={c.icono} alt={c.titulo} className="w-8 h-8 mt-0.5 shrink-0 object-contain" />
                  <div>
                    <p className="font-bold text-gray-700">{c.titulo}</p>
                    <p className="text-gray-500 whitespace-pre-line">{c.val}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-56">
            <iframe
              title="Ubicación Bertossi Badino"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.07742096264!2d-62.825824!3d-31.384428699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943355f53eb9a7f7%3A0x8388119d4d3a7ca3!2sBertossi%20%26%20Badino!5e0!3m2!1ses-419!2sar!4v1781236476020!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
