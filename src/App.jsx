import React, { useRef } from "react";

// Importa los componentes desde la carpeta "components"
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
      {/* Primera pantalla */}
      <HeroCarousel onClick={scrollToNext} />

      {/* Segunda sección */}
      <div ref={nextSectionRef} className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-1/4 p-4">
            <ButtonSidebar />
          </aside>

          {/* Contenido principal */}
          <main className="flex-1 p-8">
            <h2 className="text-3xl font-bold mb-4">Contenido principal</h2>
            <p>Aquí va el contenido de la página...</p>
          </main>
        </div>
      </div>
    </div>
  );
}
