import React from "react";
import {
  FiSkiing,
  FiTennis,
  FiActivity,
  FiStar,
  FiUsers,
  FiHeart,
  FiUser,
  FiSmile,
  FiUserCheck,
} from "react-icons/fi";

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

  // Iconos correspondientes a cada botón
  const buttonIcons = [
    <FiSkiing size={24} />,
    <FiTennis size={24} />,
    <FiActivity size={24} />, // F1
    <FiStar size={24} />, // Futbol
    <FiUsers size={24} />, // Egresados
    <FiHeart size={24} />, // Parejas
    <FiUser size={24} />, // Solos
    <FiSmile size={24} />, // Solas
    <FiUserCheck size={24} />, // Amigos
  ];

  const rightImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

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
            className={`flex items-center w-full h-24 rounded-full overflow-hidden shadow-lg transform transition hover:scale-105`}
            style={{
              background: `linear-gradient(to right, var(--tw-gradient-stops))`,
              "--tw-gradient-from":
                pastelColors[idx % pastelColors.length].split(" ")[0],
              "--tw-gradient-to":
                pastelColors[idx % pastelColors.length].split(" ")[2],
            }}
          >
            {/* Icono relativo al botón */}
            <div className="flex items-center justify-center w-20 h-full bg-white">
              {buttonIcons[idx % buttonIcons.length]}
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
