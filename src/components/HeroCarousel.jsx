import React from "react";

export default function HeroCarousel({ onClick }) {
  const backgroundImage = "/hero1.png"; // solo una imagen

  return (
    <section
      className="w-full h-screen relative cursor-pointer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      {/* Navbar transparente */}
      <header className="w-full absolute top-0 left-0 z-50 flex justify-end p-4">
        <button className="text-white text-2xl md:hidden">
          &#9776; {/* Menú hamburguesa */}
        </button>
      </header>

      {/* Texto centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
          Lorem Ipsum Lorem Ipsum
        </h1>
      </div>
    </section>
  );
}
