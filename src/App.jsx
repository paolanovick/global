import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import AutoScrollRow from "./components/AutoScrollRow";
import Footer from "./components/Footer";

export default function App() {
  const row1 = [
    { title: "Ski", colorClass: "bg-blue-600 text-white" },
    { title: "Tenis", colorClass: "bg-red-600 text-white" },
    { title: "F1", colorClass: "bg-yellow-400 text-black" },
    { title: "Futbol", colorClass: "bg-green-600 text-white" },
  ];

  const row2 = [
    { title: "Egresados", colorClass: "bg-pink-200 text-gray-800" },
    { title: "Parejas", colorClass: "bg-lime-200 text-gray-800" },
    { title: "Solos y Solas", colorClass: "bg-sky-200 text-gray-800" },
    { title: "Amigos", colorClass: "bg-amber-200 text-gray-800" },
  ];

  const row3 = row1;

  return (
    <div className="min-h-screen body-bg flex flex-col">
      <Navbar />

      <main className="w-full flex-1">
        <HeroCarousel />

        <section className="container mx-auto mt-8 px-4">
          {/* Renglon 1: scroll hacia la izquierda */}
          <AutoScrollRow items={row1} direction="left" />

          {/* Renglon 2: scroll hacia la derecha (inverso) */}
          <AutoScrollRow items={row2} direction="right" className="mt-8" />

          {/* Renglon 3: repetir primer motivo */}
          <AutoScrollRow items={row3} direction="left" className="mt-8" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
