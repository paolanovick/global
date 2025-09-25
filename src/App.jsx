import React from "react";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import ButtonSidebar from "./components/ButtonSidebar";
import AutoScrollRow from "./components/AutoScrollRow";
import Footer from "./components/Footer";

// Datos de las filas de tarjetas
const row1 = [
  { title: "Ski", color: "bg-blue-500" },
  { title: "Tenis", color: "bg-red-500" },
  { title: "F1", color: "bg-yellow-500" },
  { title: "Futbol", color: "bg-green-500" },
];

const row2 = [
  { title: "Egresados", color: "bg-pink-300" },
  { title: "Parejas", color: "bg-purple-300" },
  { title: "Solos", color: "bg-teal-300" },
  { title: "Solas", color: "bg-orange-300" },
  { title: "Amigos", color: "bg-lime-300" },
];

const row3 = row1; // repetir primer motivo

function App() {
  return (
    <div className="min-h-screen body-bg flex flex-col">
      <Navbar />

      <main className="w-full flex-1">
        <HeroCarousel />

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
