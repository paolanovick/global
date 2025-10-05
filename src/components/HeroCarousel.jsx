import React from "react";

export default function HeroCarousel({ onClick }) {
  const backgroundImage = "/hero1.png";

  return (
    <section
      className="w-full h-screen relative cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Imagen de fondo responsive */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-top"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay opcional para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navbar transparente */}
      <header className="w-full absolute top-0 left-0 z-50 flex justify-end p-4 md:p-6">
        <button className="text-white text-2xl md:hidden hover:opacity-80 transition-opacity">
          &#9776;
        </button>
      </header>

      {/* Texto centrado responsive */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-center max-w-4xl">
          {/* Agrega tu texto aquí si lo necesitas */}
        </h1>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
