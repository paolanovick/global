import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-lg">Global</span>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
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

        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded-md border text-sm">
            Iniciar
          </button>
          <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">
            Reservar
          </button>
        </div>
      </div>
    </header>
  );
}
