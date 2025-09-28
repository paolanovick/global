import React, { useRef } from "react";
import {
  FiActivity,
  FiStar,
  FiUsers,
  FiHeart,
  FiUser,
  FiSmile,
} from "react-icons/fi";
import { GiSkier, GiTennisRacket } from "react-icons/gi";

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
  ];

  const scrollRef = useRef(null);

  const handleMouseEnter = () => {
    if (scrollRef.current)
      scrollRef.current.style.animationPlayState = "paused";
  };
  const handleMouseLeave = () => {
    if (scrollRef.current)
      scrollRef.current.style.animationPlayState = "running";
  };

  return (
    <div
      className="w-full overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 whitespace-nowrap animate-scroll"
      >
        {allButtons.concat(allButtons).map((name, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center h-12 px-6 rounded-full bg-white/90 border border-gray-300 text-gray-800 font-semibold min-w-max shadow-sm hover:shadow-md transition"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 mr-2">
              {React.cloneElement(buttonIcons[idx % buttonIcons.length], {
                className: "w-5 h-5",
              })}
            </div>
            {name}
          </a>
        ))}
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
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
