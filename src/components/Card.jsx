import React from "react";

export default function Card({
  title,
  colorClass = "bg-gray-200 text-gray-800",
}) {
  return (
    <div className={`card-fixed ${colorClass} flex-shrink-0`}>
      <div className="text-center px-4">
        <div className="text-lg md:text-xl">{title}</div>
      </div>
    </div>
  );
}
