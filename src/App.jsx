import React, { useRef } from "react";
import HeroCarousel from "./components/HeroCarousel.jsx";
import Navbar from "./components/Navbar.jsx";
import ButtonSidebar from "./components/ButtonSidebar.jsx";

export default function App() {
  const nextSectionRef = useRef(null);

  const scrollToNext = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero full-screen */}
      <HeroCarousel onClick={scrollToNext} />

      {/* Segunda sección */}
      <div ref={nextSectionRef} className="min-h-screen bg-gray-100">
        <Navbar />
        {/* Carrusel de botones full-width */}
        <div className="w-full p-4 bg-gray-50">
          <ButtonSidebar />
        </div>
      </div>
    </div>
  );
}
