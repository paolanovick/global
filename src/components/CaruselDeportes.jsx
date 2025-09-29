import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaruselDeportes() {
  // Slides con links directos de Google Drive (asegurate que sean públicos)
  const slides = [
    {
      src: "https://drive.google.com/uc?id=1NNbE479z5GDbkzRRcMj4SOozN0mfRrWT",
      title: "Ski",
    },
    {
      src: "https://drive.google.com/uc?id=1S3OsXYNdvoe7f7UI4B7_JkrUowGibD-X",
      title: "Fórmula 1",
    },
    {
      src: "https://drive.google.com/uc?id=1nUWkvf9iHJeaovkgb8WrcOWqQQZatzDY",
      title: "Fútbol",
    },
    {
      src: "https://drive.google.com/uc?id=1CIbQPQX6k0B798cYNB_Ks1-qKOM6ksJs",
      title: "Ciclismo",
    },
   
  ];

  const [index, setIndex] = useState(0);

  // Cambia de slide automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].src})` }}
          />

          {/* Gradiente solo en el zócalo */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 sm:px-12 pb-4">
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
              {slides[index].title}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
