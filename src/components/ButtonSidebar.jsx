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
  const allButtons = [
    "Ski",
    "Tenis",
    "F1",
    "Futbol",
    "Egresados",
    "Parejas",
    "Solos",
    "Solas",
    "Amigos",
  ];
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
    <FiHeart size={28} />,
    <FiUser size={28} />,
    <FiSmile size={28} />,
    <FiUsers size={28} />,
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex gap-6 animate-scroll whitespace-nowrap">
        {allButtons.concat(allButtons).map((name, idx) => {
          const colors = pastelColors[idx % pastelColors.length].split(" ");
          return (
            <a
              key={idx}
              href="#"
              className={`flex items-center h-12 px-4 rounded-full bg-gradient-to-r ${colors[0]} ${colors[1]} text-white font-medium min-w-max`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-600 mr-2">
                {React.cloneElement(buttonIcons[idx % buttonIcons.length], {
                  className: "w-5 h-5",
                })}
              </div>
              {name}
            </a>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
