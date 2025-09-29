import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaruselDeportes() {
 const slides = [
   { src: "https://picsum.photos/id/1018/1000/600", title: "Ski" },
   { src: "https://picsum.photos/id/1015/1000/600", title: "Fórmula 1" },
   { src: "https://picsum.photos/id/1019/1000/600", title: "Fútbol" },
   { src: "https://picsum.photos/id/1021/1000/600", title: "Ciclismo" },
   { src: "https://picsum.photos/id/1024/1000/600", title: "Basket" },
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
