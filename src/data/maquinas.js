import mixerHorizontalMg100 from "../assets/maquinas/mixer-horizontal-mg-100.jpg";
import embolsadoraDeGranosEG500 from "../assets/maquinas/embolsadora-de-granos-eg-500.jpg";
import moledoraEmbolsadoraDeGranosGEARC9630 from "../assets/maquinas/moledora-embolsadora-de-granos-gea-rc9630.jpg";

export const categorias = [
  "Todos",
  "Tractores",
  "Cosechadoras",
  "Mixers",
  "Embolsadoras",
  "Moledoras",
  "Implementos",
  "Repuestos",
];

export const maquinas = [
  {
    id: 1,
    nombre: "Mixer Horizontal MG 100",
    categoria: "Mixers",
    precio: 85000,
    estado: "Usado",
    año: 2024,
    descripcion:
      "Mezclador y distribuidor de raciones de 10 m3 de capacidad.Mezclado a través de 3 sinfines horizontales. Está comandado por toma de potencia directa desde el tractor. La descarga del producto está accionada hidráulicamente integralmente desde la cabina del tractor. Equipado con balanza electrónica para una correcta formulación de las dietas.",
    caracteristicas: [
      "Tiempo de mezcla: 3 Minutos.",
      "Tiempo de descarga: 4 Minutos.",
      "Potencia mínima requerida: 100 Hp.",
      "Accionamiento: Toma de fuerza y mando cardánico. (540 r.p.m.)",
      "Peso: 2.980 Kg.",
      "Carga Máxima: 5.000 Kg.",
      "Neumáticos: 16-70-20.",
      "Llantas: 14×20 (MG 100).",
      "Trocha: 2.400 mm.",
      "Despeje: 400 mm.",
      "Largo: 5 m.",
      "Ancho: 2,72 m.",
    ],
    imagen: mixerHorizontalMg100,
    destacado: true,
  },
    {
    id: 2,
    nombre: "Embolsadora de Granos EG 500",
    categoria: "Embolsadoras",
    precio: 47000,
    estado: "Nuevo",
    año: 2024,
    descripcion:
      "La nueva línea de embolsadoras de granos GEA para 9 pies, cuenta con un chásis reforzado tanto para el trabajo como para el transporte. Equipada con transmisión a cadena tratados termicamente. Sinfín horizontal que reduce notablemente la rotura de granos. Y babero de goma que evita el retorno de granos.",
    caracteristicas: [
      "Medida de tunel: 9 pies.",
      "Capacidad de tolva: 1.600 lts.",
      "Diámetro tubo sinfín: 410 mm.",
      "Capacidad de embolsado: 500 Tn/h.",
      "Transporte: Lanza tiro de punta.",
      "Neumáticos: 7,50×16.",
      "Seguridad: Barra cardánica con fusible.",
      "Peso: 1.300 kg.",
      "Elevacion de bolsa: Malacate y percha.",
      "Cobertura: Tapas superiores de chapa.",
      "Freno: Manual a zapata (Opcional hidráulico).",
      "Accionamiento: Toma de potencia a 540 RPM.",
    ],
    imagen: embolsadoraDeGranosEG500,
    destacado: true,
  },
    {
    id: 3,
    nombre: "Moledora Embolsadora de Granos GEA RC9630",
    categoria: "Moledoras",
    precio: 65000,
    estado: "Nuevo",
    año: 2022,
    descripcion:
      "Máquina estacionaria para moler y embutir todo tipo de granos en cualquier estado de humedad. La molienda se realiza en base a un sistema de molino a martillos. El producto final se almacena en bolsas plásticas de 9 y 6 pies. Puede ser dos máquinas en una sola, ya que anulando el sistema de molido, cumple la función de una embolsadora de granos secos convencional. La molienda es mucho más homogénea y supera notablemente a las quebradoras de granos tradicionales del mercado.",
    caracteristicas: [
      "Sistema de molino a martillos.",
      "Zarandas intercambiables de distintas medidas.",
      "Muele granos en cualquier estado de humedad.",
      "Túnel de embolsado de 9 y 6 pies.",
      "Sistema dual. Permite embolsar grano entero evitando",
      "el molino. Dos maquinas en una.",
      "Sencilla, auto lubricable. Fácil acceso a sus partes móviles.",
      "Sistema de transmisión con correas auto tensadas de 1° calidad.",
      "Chimango de alto caudal para carga desde camiones.",
      "Sistema hidráulico propio.",
      "Caudal de molienda hasta 30 tn/hora. Depende del tipo de grano, la humedad, zaranda y potencia del tractor.",
      "Caudal de embutido de grano entero 400 tn/hora.",
      "Potencia mínima 100 HP.",
      "Potencia máxima admitida 160 HP.",
      "Cámara de molienda de Ø 520 mm x 810 mm.",
      "Chimango alimentador de Ø 250 mm.",
      "Equipo hidráulico 35 l/min.",
      "Frenos hidráulicos opcionales.",
      "Accionamiento: Toma de potencia a 540 RPM.",
    ],
    imagen: moledoraEmbolsadoraDeGranosGEARC9630,
    destacado: true,
  }
];

