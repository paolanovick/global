import React from "react";

export default function Card({
  paquete,
  colorClass = "bg-gray-200 text-gray-800",
}) {
  if (!paquete) return null;

  return (
    <div
      className={`card-fixed ${colorClass} flex-shrink-0 max-w-xs rounded-lg shadow-md overflow-hidden m-2`}
    >
      {/* Imagen principal */}
      <img
        src={paquete.imagen_principal}
        alt={paquete.title}
        className="w-full h-48 object-cover"
      />

      {/* Contenido */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {paquete.destinos?.destino?.ciudad || "Destino"},{" "}
          {paquete.destinos?.destino?.pais || "País"}
        </h3>
        <p
          className="text-gray-600 text-sm mb-2"
          dangerouslySetInnerHTML={{
            __html: paquete.titulo || paquete.description,
          }}
        ></p>
        <div className="text-gray-800 font-semibold">
          {paquete.cant_noches || 0} noches -{" "}
          {paquete.price || `${paquete.tipo_moneda || "$"} consultar`}
        </div>
      </div>
    </div>
  );
}
