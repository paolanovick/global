// ButtonSidebar.jsx
import React from "react";
import {
  FiActivity,
  FiStar,
  FiUsers,
  FiHeart,
  FiUser,
  FiSmile,
} from "react-icons/fi";
import { GiSkier, GiTennisRacket } from "react-icons/gi";

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

  const buttonIcons = [
    <GiSkier size={28} />, // Ski
    <GiTennisRacket size={28} />, // Tenis
    <FiActivity size={28} />, // F1
    <FiStar size={28} />, // Futbol
    <FiUsers size={28} />, // Egresados
    <FiHeart size={28} />, // Parejas
    <FiUser size={28} />, // Solos
    <FiSmile size={28} />, // Solas
    <FiUsers size={28} />, // Amigos
  ];

  const rightImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  const buttonHeight = 96; // px
  const imageHeight = buttonHeight * 3 + 16; // 3 botones + gap

  return (
    <section className="flex flex-col md:flex-row mt-8 gap-6 px-4 md:px-16">
      {/* Botones izquierda */}
      <div className="flex flex-col gap-4 md:w-1/4">
        {allButtons.map((name, idx) => {
          // Tomamos los colores del array pastelColors
          const colors = pastelColors[idx % pastelColors.length].split(" ");
          const fromColor = colors[0];
          const toColor = colors[2] || colors[1]; // fallback por si no hay 3 partes

          return (
            <a
              key={idx}
              href="#"
              className="flex items-center w-full h-24 rounded-full shadow-lg transform transition hover:scale-105"
              style={{
                background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
              }}
            >
              <div className="flex items-center justify-center w-20 h-full bg-white">
                {React.cloneElement(buttonIcons[idx % buttonIcons.length], {
                  className: "text-gray-800",
                })}
              </div>
              <span className="ml-4 text-lg font-semibold text-gray-800">
                {name}
              </span>
            </a>
          );
        })}
      </div>

      {/* Imágenes derecha */}
      <div className="flex flex-col gap-2 md:w-3/4">
        {rightImages.map((src, idx) => (
          <div
            key={idx}
            className="w-full bg-gray-200 rounded-lg shadow-md"
            style={{ height: `${imageHeight}px` }}
          >
            <img
              src={src}
              alt={`right-${idx}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
