import React from "react";

export default function Card({
  title,
  image,
  price,
  colorClass = "bg-gray-200 text-gray-800",
}) {
  return (
    <div
      className={`card-fixed ${colorClass} flex-shrink-0 w-64 rounded-lg overflow-hidden shadow-md`}
    >
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4 text-center">
        <div className="text-lg font-semibold">{title}</div>
        {price && <div className="mt-2 text-blue-600 font-bold">{price}</div>}
      </div>
    </div>
  );
}
