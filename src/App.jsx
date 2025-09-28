import React, { useRef, useState, useEffect } from "react";

// Componente simulado de Hero
function HeroCarousel({ onClick }) {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Descubre Destinos Increíbles
        </h1>
        <p className="text-xl mb-8">
          Los mejores paquetes turísticos te esperan
        </p>
        <button
          onClick={onClick}
          className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Explorar Destinos ↓
        </button>
      </div>
    </div>
  );
}

// Componente simulado de Navbar
function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">TurismoApp</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Destinos
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Paquetes
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Ofertas
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Componente simulado de ButtonSidebar
function ButtonSidebar() {
  const categories = [
    { name: "Playas", icon: "🏖️", active: true },
    { name: "Montañas", icon: "🏔️", active: false },
    { name: "Ciudades", icon: "🏙️", active: false },
    { name: "Aventura", icon: "🚀", active: false },
    { name: "Relax", icon: "🧘‍♀️", active: false },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 pb-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-6 py-3 rounded-full font-medium transition-colors ${
              category.active
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

// Tu Card original
function Card({ title, colorClass = "bg-gray-200 text-gray-800" }) {
  return (
    <div
      className={`card-fixed ${colorClass} flex-shrink-0 p-4 rounded-lg shadow-md m-2 min-w-64`}
    >
      <div className="text-center px-4">
        <div className="text-lg md:text-xl">{title}</div>
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

        {/* Cards de AllSeasons - NUEVO */}
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
