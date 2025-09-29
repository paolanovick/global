import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaruselPaquetes() {
  const [paquete, setPaquete] = useState(null);
  const [loading, setLoading] = useState(true);

  // Tus credenciales y código de paquete
  const usuario = "paonovick10@gmail.com";
  const clave = "cb9daff9-6079-45fc-be02-23e86d8e1b37";
  const productoCodigo = "PAQ11381";

  useEffect(() => {
    const fetchPaquete = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.agenciatripnow.site/webhook/atlas-detalle",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              Usuario: usuario,
              Clave: clave,
              ProductoCodigo: productoCodigo,
            }),
          }
        );
        const data = await res.json();
        setPaquete(data); // data = respuesta de n8n
      } catch (err) {
        console.error("Error al cargar el paquete:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPaquete();
  }, []);

  if (loading)
    return <div className="p-4 text-center">Cargando paquete...</div>;
  if (!paquete)
    return <div className="p-4 text-center">No se encontró el paquete</div>;

  // Asumiendo que la API devuelve un campo "ImagenPrincipal" y "Nombre"
  const imagenes = paquete.ImagenPrincipal ? [paquete.ImagenPrincipal] : [];
  const nombre = paquete.Nombre || paquete.Titulo || "Paquete";

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
      <AnimatePresence mode="wait">
        {imagenes.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Overlay zócalo */}
            <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-4">
              <h2 className="text-white text-xl sm:text-3xl font-bold drop-shadow-lg">
                {nombre}
              </h2>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}
