import React, { useState } from "react";

function Card({ title, image, galeria = [], price, colorClass }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combinar imagen principal con galería
  const allImages = [image, ...galeria].filter(
    (img) => img && img.trim() !== ""
  );
  const hasMultipleImages = allImages.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <div className="flex-shrink-0 w-full sm:w-80 md:w-72 lg:w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 sm:h-56 md:h-48 overflow-hidden group">
        <img
          src={
            allImages[currentImageIndex] ||
            "https://via.placeholder.com/400x300?text=Sin+imagen"
          }
          alt={`${title} - imagen ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/400x300?text=Sin+imagen";
          }}
        />

        {hasMultipleImages && (
          <>
            {/* Botón Anterior */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              aria-label="Imagen anterior"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Botón Siguiente */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
              aria-label="Imagen siguiente"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indicadores de imagen */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-4"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <span className={`text-sm px-3 py-1 rounded-full ${colorClass}`}>
            {price}
          </span>
          {hasMultipleImages && (
            <span className="text-xs text-gray-500">
              {currentImageIndex + 1}/{allImages.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
