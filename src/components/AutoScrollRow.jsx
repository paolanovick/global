// Page.jsx
import React from "react";
import ButtonSidebar from "./ButtonSidebar";
import AutoScrollRow from "./AutoScrollRow";

export default function Page() {
  // Primera fila: colores primarios
  const primaryItems = [
    { title: "Rojo", colorClass: "bg-red-500" },
    { title: "Azul", colorClass: "bg-blue-500" },
    { title: "Amarillo", colorClass: "bg-yellow-500" },
    { title: "Verde", colorClass: "bg-green-500" },
  ];

  // Segunda fila: colores pasteles
  const pastelItems = [
    { title: "Rosa", colorClass: "bg-pink-200" },
    { title: "Celeste", colorClass: "bg-blue-200" },
    { title: "Verde claro", colorClass: "bg-green-200" },
    { title: "Amarillo pastel", colorClass: "bg-yellow-200" },
  ];

  // Tercera fila: repetir primarios
  const thirdRow = [...primaryItems];

  return (
    <div className="flex flex-col gap-12 px-4 md:px-16 mt-8">
      {/* Sidebar con botones e imágenes */}
      <ButtonSidebar />

      {/* Fila 1: colores primarios */}
      <AutoScrollRow items={primaryItems} direction="left" />

      {/* Fila 2: colores pasteles */}
      <AutoScrollRow items={pastelItems} direction="right" />

      {/* Fila 3: repetir primarios */}
      <AutoScrollRow items={thirdRow} direction="left" />
    </div>
  );
}
