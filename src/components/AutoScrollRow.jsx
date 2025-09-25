import React from "react";
import AutoScrollRow from "./AutoScrollRow";
import ButtonSidebar from "./ButtonSidebar";

export default function Page() {
  // Colores primarios
  const primaryItems = [
    { title: "Rojo", colorClass: "bg-red-500" },
    { title: "Azul", colorClass: "bg-blue-500" },
    { title: "Amarillo", colorClass: "bg-yellow-500" },
    { title: "Verde", colorClass: "bg-green-500" },
  ];

  // Colores pastel
  const pastelItems = [
    { title: "Rosa", colorClass: "bg-pink-200" },
    { title: "Celeste", colorClass: "bg-blue-200" },
    { title: "Verde claro", colorClass: "bg-green-200" },
    { title: "Amarillo pastel", colorClass: "bg-yellow-200" },
  ];

  const thirdRow = [...primaryItems]; // repetir primarios

  return (
    <div className="flex flex-col gap-12">
      <ButtonSidebar />

      {/* Primera fila: colores primarios */}
      <AutoScrollRow items={primaryItems} direction="left" />

      {/* Segunda fila: colores pastel */}
      <AutoScrollRow items={pastelItems} direction="right" />

      {/* Tercera fila: repetir colores primarios */}
      <AutoScrollRow items={thirdRow} direction="left" />
    </div>
  );
}
