import React, { useRef, useState, useEffect } from "react";
import HeroCarousel from "./components/HeroCarousel.jsx";
import Navbar from "./components/Navbar.jsx";
import ButtonSidebar from "./components/ButtonSidebar.jsx";

// Tu Card adaptada para datos de AllSeasons
function Card({
  title,
  destino,
  pais,
  hotel,
  noches,
  imagen,
  url,
  colorClass = "bg-gray-200 text-gray-800",
}) {
  return (
    <div
      className={`card-fixed ${colorClass} flex-shrink-0 rounded-lg shadow-md m-2 min-w-80 max-w-80 overflow-hidden`}
    >
      {/* Imagen del paquete */}
      {imagen && (
        <div className="h-48 overflow-hidden">
          <img
            src={imagen}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="p-4">
        {/* Título del paquete */}
        <div className="text-center px-2 mb-3">
          <div className="text-lg md:text-xl font-bold leading-tight">
            {title && title.length > 50
              ? title.substring(0, 50) + "..."
              : title}
          </div>
        </div>

        {/* Destino y País */}
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium">
            {destino}, {pais}
          </span>
        </div>

        {/* Hotel */}
        {hotel && (
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-sm">{hotel}</span>
          </div>
        )}

        {/* Noches */}
        {noches && (
          <div className="flex items-center mb-3">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{noches} noches</span>
          </div>
        )}

        {/* Botón para más info */}
        {url && (
          <div className="text-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded text-sm font-medium transition-all duration-200"
            >
              Ver detalles →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para las 5 cards de AllSeasons
function AllSeasonsCards() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Reemplaza con tu URL real de n8n
  const N8N_WEBHOOK_URL =
    "https://tu-n8n-instance.com/webhook/allseasons-packages";

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
              title={pkg.titulo}
              destino={pkg.destino}
              pais={pkg.pais}
              hotel={pkg.hotel}
              noches={pkg.noches}
              imagen={pkg.imagen}
              url={pkg.url}
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

        {/* Cards de AllSeasons - SOLO ESTO ES NUEVO */}
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
