import React, { useEffect, useState } from "react";

export default function HeroCarousel() {
  // tus imágenes en formato PNG
  const images = ["/hero1.png", "/hero2.png", "/hero3.png"];
  const [index, setIndex] = useState(0);

  // rotación automática cada 4.5s

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(id);
  }, [images.length]);


  return (
    <section className="w-full relative h-72 md:h-96 overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`slide-${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay: logo + headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center pointer-events-none">
          <div className="hero-logo inline-flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
            <span className="font-bold">Global</span>
          </div>

          <h1 className="mt-4 text-white text-2xl md:text-4xl font-extrabold drop-shadow-lg">
            Tu agencia de viajes — descubre el mundo
          </h1>
        </div>
      </div>
    </section>
  );
}
