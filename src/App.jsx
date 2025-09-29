import React, { useRef, useState, useEffect } from "react";
import HeroCarousel from "./components/HeroCarousel.jsx";
import Navbar from "./components/Navbar.jsx";
import ButtonSidebar from "./components/ButtonSidebar.jsx";
import Card from "./components/Card.jsx"; 



// Componente para las 5 cards de AllSeasons
function AllSeasonsCards() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza con tu URL real de n8n

const N8N_WEBHOOK_URL =
  "https://api.agenciatripnow.site/webhook/allseason-package";


  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(N8N_WEBHOOK_URL);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      // Tomar solo las primeras 5
      const processedData = Array.isArray(data)
        ? data.slice(0, 5).map((item) => item.json || item)
        : [data].slice(0, 5);
      setPackages(processedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getColorByDestination = (destino) => {
    const colors = {
      Calafate: "bg-blue-600 text-white",
      Bariloche: "bg-green-600 text-white",
      Mendoza: "bg-purple-600 text-white",
      "Buenos Aires": "bg-red-600 text-white",
      Salta: "bg-yellow-600 text-black",
      Ushuaia: "bg-indigo-600 text-white",
      Córdoba: "bg-pink-600 text-white",
      "Mar del Plata": "bg-teal-600 text-white",
    };

    for (const [key, color] of Object.entries(colors)) {
      if (destino && destino.toLowerCase().includes(key.toLowerCase())) {
        return color;
      }
    }
    return "bg-gray-600 text-white";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Cargando paquetes...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-center bg-red-50 p-4 rounded-lg">
          <div className="text-red-600 mb-2">Error al cargar paquetes</div>
          <button
            onClick={fetchPackages}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl font-bold text-gray-800">Destinos Destacados</h2>
        <button
          onClick={fetchPackages}
          className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Actualizar
        </button>
      </div>

      <div className="flex overflow-x-auto pb-4 px-2 space-x-0">
        {packages.length > 0 ? (
          packages.map((pkg, index) => (
            <Card
              key={pkg.id || index}
              title={`${pkg.destino || "Destino"}, ${
                pkg.pais || "Argentina"
              } - ${pkg.noches || "0"} noches`}
              colorClass={getColorByDestination(pkg.destino)}
            />
          ))
        ) : (
          <div className="flex justify-center w-full py-8">
            <div className="text-gray-500">No hay paquetes disponibles</div>
          </div>
        )}
      </div>
    </div>
  );
}

// Tu App principal actualizada
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

        {/* Cards de AllSeasons - solo un fetch */}
        <div className="w-full p-4 bg-white">
          <AllSeasonsCards />
        </div>

        {/* Resto del contenido de tu app */}
        <div className="p-4">
          <div className="text-center text-gray-600">
            <p>Aquí puedes agregar más secciones de tu aplicación</p>
          </div>
        </div>
      </div>
    </div>
  );
}
