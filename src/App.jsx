import React, { useRef, useState, useEffect } from "react";
import HeroCarousel from "./components/HeroCarousel.jsx";
import Navbar from "./components/Navbar.jsx";
import ButtonSidebar from "./components/ButtonSidebar.jsx";
import Card from "./components/Card.jsx";
import ContactForm from "./components/ContactForm.jsx";
import CaruselDeportes from "./components/CaruselDeportes.jsx";
// import CaruselPaquetes from "./components/CaruselPaquetes.jsx";
import Footer from "./components/Footer.jsx";

// Componente para las cards de AllSeasons
function AllSeasonsCards() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      const processedData = data.packages ? data.packages.slice(0, 10) : [];
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
      Iguazú: "bg-emerald-600 text-white",
      Cafayate: "bg-orange-600 text-white",
    };

    for (const [key, color] of Object.entries(colors)) {
      if (destino && destino.toLowerCase().includes(key.toLowerCase())) {
        return color;
      }
    }
    return "bg-gray-600 text-white";
  };

  const firstRow = packages.slice(0, 5);
  const secondRow = packages.slice(5, 10);

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
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Destinos Destacados
        </h2>
      </div>

      {/* Primera fila */}
      {firstRow.length > 0 && (
        <div className="w-full overflow-x-auto pb-4 mb-4">
          <div className="flex gap-4 px-4 md:justify-center md:flex-wrap">
            {firstRow.map((pkg, index) => (
              <div key={pkg.id || index} className="flex-shrink-0">
                <Card
                  title={pkg.titulo}
                  image={pkg.imagen_principal}
                  galeria={pkg.galeria}
                  price={`${pkg.cant_noches} noches`}
                  colorClass={getColorByDestination(pkg.ciudad)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Segunda fila */}
      {secondRow.length > 0 && (
        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-4 px-4 md:justify-center md:flex-wrap">
            {secondRow.map((pkg, index) => (
              <div key={pkg.id || `row2-${index}`} className="flex-shrink-0">
                <Card
                  title={pkg.titulo}
                  image={pkg.imagen_principal}
                  galeria={pkg.galeria}
                  price={`${pkg.cant_noches} noches`}
                  colorClass={getColorByDestination(pkg.ciudad)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {packages.length === 0 && (
        <div className="flex justify-center w-full py-8">
          <div className="text-gray-500">No hay paquetes disponibles</div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const nextSectionRef = useRef(null);

  const scrollToNext = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero full-screen */}
      <HeroCarousel onClick={scrollToNext} />

      {/* Contenido principal */}
      <div ref={nextSectionRef} className="w-full bg-gray-100">
        <Navbar />

        {/* Carrusel de botones */}
        <div className="w-full py-4 px-4 md:px-6 lg:px-8 bg-gray-50">
          <ButtonSidebar />
        </div>

        {/* Carrusel de Deportes */}
        <div className="w-full">
          <CaruselDeportes />
        </div>

        {/* Cards de AllSeasons */}
        <div className="w-full py-8 bg-white">
          <AllSeasonsCards />
        </div>

        {/* Detalle paquete Atlas - Comentado hasta resolver permisos */}
        {/* <div className="w-full py-8 px-4">
          <h1 className="text-2xl md:text-3xl text-center mb-6">
            Detalle del Paquete ATLAS
          </h1>
          <CaruselPaquetes />
        </div> */}

        {/* Formulario de contacto - sin padding extra porque tiene fondo negro propio */}
        <div className="w-full">
          <ContactForm />
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
