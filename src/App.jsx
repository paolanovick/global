import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ButtonSidebar from "./components/ButtonSidebar";
import AutoScrollRow from "./components/AutoScrollRow";
import Footer from "./components/Footer";

// Datos de las filas de tarjetas
const row1 = [
  { title: "Ski", colorClass: "bg-blue-500 text-white" },
  { title: "Tenis", colorClass: "bg-red-500 text-white" },
  { title: "F1", colorClass: "bg-yellow-500 text-black" },
  { title: "Futbol", colorClass: "bg-green-500 text-white" },
];

const row2 = [
  { title: "Egresados", colorClass: "bg-pink-300 text-gray-800" },
  { title: "Parejas", colorClass: "bg-purple-300 text-white" },
  { title: "Solos", colorClass: "bg-teal-300 text-white" },
  { title: "Solas", colorClass: "bg-orange-300 text-white" },
  { title: "Amigos", colorClass: "bg-lime-300 text-gray-800" },
];

const row3 = row1; // repetir primer motivo

function App() {
  return (
    <div className="min-h-screen body-bg flex flex-col">
      <Navbar />

      <main className="w-full flex-1">
        <HeroCarousel />
        {/* Franja con texto animado */}
        <div className="w-full bg-gray-100 border-y border-gray-200 overflow-hidden">
          <p className="animate-marquee text-gray-700 text-sm font-medium py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit • Vivamus
            lacinia odio vitae vestibulum vestibulum • Cras venenatis euismod
            malesuada
          </p>
        </div>
        {/* Botones tipo sidebar debajo del carousel */}
        <ButtonSidebar />

        {/* Renglones de tarjetas */}
        <section className="container mx-auto mt-8 px-4 space-y-8">
          {/* Renglon 1: scroll hacia la izquierda */}
          <AutoScrollRow items={row1} direction="left" />

          {/* Renglon 2: scroll hacia la derecha (inverso) */}
          <AutoScrollRow items={row2} direction="right" />

          {/* Renglon 3: repetir primer motivo */}
          <AutoScrollRow items={row3} direction="left" />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
