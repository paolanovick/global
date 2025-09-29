import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaruselDeportes() {
  const slides = [
    {
      src: "https://drive.google.com/uc?id=1NNbE479z5GDbkzRRcMj4SOozN0mfRrWT",
      title: "Ski",
    },
    {
      src: "https://drive.google.com/uc?id=11fma9SZSMQsw0UFvEJxzDa_6zF72Xn_c",
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
    {
      src: "https://drive.google.com/uc?id=XXXXXXXXXXXXXXX", // basket
      title: "Basket",
    },
  ];

  const [index, setIndex] = useState(0);

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
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[index].src})`,
          }}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Overlay + título */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center sm:items-end justify-center sm:justify-start px-4 sm:px-12 pb-6">
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg text-center sm:text-left">
              {slides[index].title}
            </h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
