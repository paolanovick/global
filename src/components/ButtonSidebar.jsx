import React from "react";
import {
  FaSkiing,
  FaTableTennis,
  FaFlagCheckered,
  FaFutbol,
  FaUsers,
  FaHeart,
  FaUser,
} from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

const pastelColors = [
  "from-pink-200 to-pink-300",
  "from-blue-200 to-blue-300",
  "from-green-200 to-green-300",
  "from-yellow-200 to-yellow-300",
  "from-purple-200 to-purple-300",
  "from-orange-200 to-orange-300",
  "from-teal-200 to-teal-300",
  "from-lime-200 to-lime-300",
  "from-rose-200 to-rose-300",
];

export default function ButtonSidebar() {
  const group1 = ["Ski", "Tenis", "F1", "Futbol"];
  const group2 = ["Egresados", "Parejas", "Solos", "Solas", "Amigos"];
  const allButtons = [...group1, ...group2];

  const rightImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  // Íconos asignados
  const iconMap = {
    Ski: <FaSkiing className="w-8 h-8 text-gray-700" />,
    Tenis: <FaTableTennis className="w-8 h-8 text-green-600" />,
    F1: <FaFlagCheckered className="w-8 h-8 text-black" />,
    Futbol: <FaFutbol className="w-8 h-8 text-green-700" />,
    Egresados: <FaUserGraduate className="w-8 h-8 text-purple-600" />,
    Parejas: <FaHeart className="w-8 h-8 text-red-500" />,
    Solos: <FaUser className="w-8 h-8 text-gray-700" />,
    Solas: <FaUser className="w-8 h-8 text-pink-500" />,
    Amigos: <FaUsers className="w-8 h-8 text-blue-600" />,
  };

  const buttonHeight = 96; // px
  const imageHeight = buttonHeight * 3; // 3 botones apilados

  return (
    <section className="flex flex-col md:flex-row mt-8 gap-6 px-4 md:px-16">
      {/* Botones a la izquierda */}
      <div className="flex flex-col gap-4 md:w-1/4">
        {allButtons.map((name, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center w-full h-24 rounded-full overflow-hidden shadow-lg transform transition hover:scale-105"
            style={{
              background: `linear-gradient(to right, var(--tw-gradient-stops))`,
              "--tw-gradient-from":
                pastelColors[idx % pastelColors.length].split(" ")[0],
              "--tw-gradient-to":
                pastelColors[idx % pastelColors.length].split(" ")[2],
            }}
          >
            {/* Círculo al inicio con ícono */}
            <div className="flex items-center justify-center w-20 h-full bg-white">
              {iconMap[name]}
            </div>
            {/* Texto */}
            <span className="ml-4 text-lg font-semibold text-gray-800">
              {name}
            </span>
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
