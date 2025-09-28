import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all border-b ${
        scrolled ? "bg-white/90 backdrop-blur shadow" : "bg-white/0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Global</div>

        <nav className="flex gap-4">
          <a href="#" className="hover:underline">
            Inicio
          </a>
          <a href="#" className="hover:underline">
            Destinos
          </a>
          <a href="#" className="hover:underline">
            Promociones
          </a>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
