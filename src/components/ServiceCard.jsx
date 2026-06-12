function ServiceCard({ servicio }) {
  const { icono, imagen, titulo, descripcion } = servicio;
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center group">
      <div className="mb-4 group-hover:scale-110 transition-transform inline-block">
        {imagen
          ? <img src={imagen} alt={titulo} className="w-12 h-12 object-contain mx-auto" />
          : <span className="text-5xl">{icono}</span>
        }
      </div>
      <h3 className="font-bold text-green-800 text-lg mb-2">{titulo}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{descripcion}</p>
    </div>
  );
}

export default ServiceCard;
