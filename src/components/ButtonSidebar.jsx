import React from "react";

export default function ButtonSidebar() {
  // Primer grupo de botones
  const group1 = ["Ski", "Tenis", "F1", "Futbol"];
  // Segundo grupo de botones
  const group2 = ["Egresados", "Parejas", "Solos", "Solas", "Amigos"];

  // Imágenes del carusel (public folder)
  const rightImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  return (
    <section className="flex flex-col md:flex-row mt-8 gap-8 px-4 md:px-16">
      {/* Botones a la izquierda */}
      <div className="flex flex-col gap-4 md:w-1/4">
        {[...group1, ...group2].map((name, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center justify-between bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200"
          >
            <span>{name}</span>
            {/* Imagen dentro del botón (puede ser un icono o miniatura) */}
            <img src="/circuito.png" alt="icon" className="w-6 h-6 ml-2" />
          </a>
        ))}
      </div>

      {/* Imágenes a la derecha */}
      <div className="flex flex-col gap-4 md:w-3/4 items-center md:items-end">
        {rightImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`right-${idx}`}
            className="w-40 h-28 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
