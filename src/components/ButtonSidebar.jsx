import React from "react";

// Colores pastel para los botones
const pastelColors = [
  "bg-pink-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-lime-200",
  "bg-rose-200",
];

export default function ButtonSidebar() {
  const group1 = ["Ski", "Tenis", "F1", "Futbol"];
  const group2 = ["Egresados", "Parejas", "Solos", "Solas", "Amigos"];
  const allButtons = [...group1, ...group2];

  const rightImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  // Altura de cada botón para calcular altura de la imagen
  const buttonHeight = 48; // px aprox (Tailwind py-2 = 0.5rem * 2 + font)
  const imageHeight = buttonHeight * 3; // cada imagen = altura de 3 botones

  return (
    <section className="flex flex-col md:flex-row mt-8 gap-6 px-4 md:px-16">
      {/* Botones a la izquierda */}
      <div className="flex flex-col gap-3 md:w-1/4">
        {allButtons.map((name, idx) => (
          <a
            key={idx}
            href="#"
            className={`flex items-center justify-between text-gray-800 font-semibold px-6 py-2 rounded-full shadow-sm transition-all duration-200 ${
              pastelColors[idx % pastelColors.length]
            }`}
          >
            <span>{name}</span>
            <img src="/circuito.png" alt="icon" className="w-5 h-5 ml-2" />
          </a>
        ))}
      </div>

      {/* Imágenes a la derecha */}
      <div className="flex flex-col gap-2 md:w-3/4">
        {rightImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`right-${idx}`}
            className="w-full object-cover rounded-lg shadow-md"
            style={{ height: `${imageHeight}px` }}
          />
        ))}
      </div>
    </section>
  );
}
