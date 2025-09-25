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
  "from-pink-400 to-pink-500",
  "from-blue-400 to-blue-500",
  "from-green-400 to-green-500",
  "from-yellow-400 to-yellow-500",
  "from-purple-400 to-purple-500",
  "from-orange-400 to-orange-500",
  "from-teal-400 to-teal-500",
  "from-lime-400 to-lime-500",
  "from-rose-400 to-rose-500",
];

export default function ButtonSidebar() {
  const group1 = ["Ski", "Tenis", "F1", "Futbol"];
  const group2 = ["Egresados", "Parejas", "Solos", "Solas", "Amigos"];
  const allButtons = [...group1, ...group2];

  const buttonIcons = [
    <GiSkier size={28} />,
    <GiTennisRacket size={28} />,
    <FiActivity size={28} />,
    <FiStar size={28} />,
    <FiUsers size={28} />,
    <FiHeart size={28} />,
    <FiUser size={28} />,
    <FiSmile size={28} />,
    <FiUsers size={28} />,
  ];

  const rightImages = ["/hero1.png", "/hero2.png", "/hero3.png"];

  const buttonHeight = 96;
  const imageHeight = buttonHeight * 3 + 16;

  return (
    <section className="flex flex-col md:flex-row mt-8 gap-6 px-4 md:px-16">
      {/* Botones izquierda */}
      <div className="flex flex-col gap-4 md:w-1/4">
        {allButtons.map((name, idx) => {
          const colors = pastelColors[idx % pastelColors.length].split(" ");
          const fromColor = colors[0];
          const toColor = colors[1];

          return (
            <a
              key={idx}
              href="#"
              className={`flex items-center w-full h-14 rounded-full border border-gray-200/50 shadow-sm bg-gradient-to-r ${fromColor} ${toColor} transition hover:shadow-md hover:scale-[1.02]`}
            >
              {/* círculo blanco con ícono */}
              <div className="flex items-center justify-center w-12 h-12 ml-2 rounded-full bg-white border border-gray-200 shadow-sm">
                {React.cloneElement(buttonIcons[idx % buttonIcons.length], {
                  className: "text-gray-700 w-5 h-5",
                })}
              </div>

              {/* texto */}
              <span className="ml-3 text-sm font-medium text-gray-700 tracking-wide">
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
