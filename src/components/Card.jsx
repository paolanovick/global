import React, { useState, useEffect } from "react";

// Tu Card actualizada con más props pero manteniendo la estructura
function Card({
  title,
  subtitle,
  details,
  colorClass = "bg-gray-200 text-gray-800",
  imageUrl,
  actionUrl,
}) {
  return (
    <div
      className={`card-fixed ${colorClass} flex-shrink-0 rounded-lg shadow-md m-2 min-w-72 max-w-72 overflow-hidden`}
    >
      {/* Imagen si existe */}
      {imageUrl && (
        <div className="h-32 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="text-center px-4 py-4">
        {/* Título principal */}
        <div className="text-lg md:text-xl font-bold mb-2 leading-tight">
          {title}
        </div>

        {/* Subtítulo */}
        {subtitle && <div className="text-sm opacity-90 mb-2">{subtitle}</div>}

        {/* Detalles adicionales */}
        {details && <div className="text-xs opacity-75 mb-3">{details}</div>}

        {/* Botón de acción */}
        {actionUrl && (
          <a
            href={actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm transition-all duration-200"
          >
            Ver más →
          </a>
        )}
      </div>
    </div>
  );
}

// Componente que usa la Card mejorada
export default function AllSeasonsEnhanced() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL de tu webhook de n8n
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
      const processedData = Array.isArray(data)
        ? data.map((item) => item.json || item)
        : data;
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
    };

    for (const [key, color] of Object.entries(colors)) {
      if (destino.toLowerCase().includes(key.toLowerCase())) {
        return color;
      }
    }
    return "bg-gray-600 text-white";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-pulse text-lg">
          Cargando paquetes AllSeasons...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center p-8 bg-red-50 rounded-lg m-4">
        <div className="text-red-600 mb-4">Error: {error}</div>
        <button
          onClick={fetchPackages}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Paquetes AllSeasons
          </h1>
          <p className="text-gray-600">Descubre los mejores destinos</p>
        </div>
        <button
          onClick={fetchPackages}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          🔄 Actualizar
        </button>
      </div>

      <div className="flex overflow-x-auto pb-6 space-x-0">
        {packages.length > 0 ? (
          packages.map((pkg, index) => (
            <Card
              key={pkg.id || index}
              title={
                pkg.titulo
                  ? pkg.titulo.substring(0, 50) + "..."
                  : "Paquete turístico"
              }
              subtitle={`${pkg.destino}, ${pkg.pais}`}
              details={`${pkg.noches} noches • ${pkg.hotel}`}
              colorClass={getColorByDestination(pkg.destino)}
              imageUrl={pkg.imagen}
              actionUrl={pkg.url}
            />
          ))
        ) : (
          <div className="text-center py-12 w-full">
            <div className="text-gray-500">No hay paquetes disponibles</div>
          </div>
        )}
      </div>

      {packages.length > 0 && (
        <div className="text-center text-sm text-gray-500 mt-4">
          Mostrando {packages.length} paquete{packages.length !== 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}
