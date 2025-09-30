import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaruselPaquetes() {
  const [paquete, setPaquete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productoCodigo = "PAQ11381";

  useEffect(() => {
    const fetchPaquete = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching paquete:", productoCodigo);

        const res = await fetch(
          "https://api.agenciatripnow.site/webhook/atlas-detalle",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              Usuario: "paonovick10@gmail.com",
              Clave: "37Paola37",
              ProductoCodigo: productoCodigo,
            }),
          }
        );

        console.log("Response status:", res.status);

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        console.log("Respuesta completa:", JSON.stringify(data, null, 2));

        setPaquete(data);
      } catch (err) {
        console.error("Error al cargar el paquete:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPaquete();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Cargando paquete...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center bg-red-50 p-6 rounded-lg">
          <p className="text-red-600 mb-2">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  if (!paquete) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No se encontró el paquete</p>
      </div>
    );
  }

  console.log("Renderizando paquete:", paquete);

  // Extraer datos (ajusta según la estructura real)
  const imagenes = paquete.ImagenPrincipal ? [paquete.ImagenPrincipal] : [];
  const nombre = paquete.Nombre || paquete.Titulo || "Paquete sin nombre";

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
      <AnimatePresence mode="wait">
        {imagenes.length > 0 ? (
          imagenes.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-4">
                <h2 className="text-white text-xl sm:text-3xl font-bold drop-shadow-lg">
                  {nombre}
                </h2>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <p className="text-gray-600">No hay imágenes disponibles</p>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
