import React from "react";
import Card from "./Card";

export default function AutoScrollRow({
  items = [],
  direction = "left",
  className = "",
}) {
  // duplicamos los items para crear loop continuo
  const double = [...items, ...items];
  const animClass = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div className={`w-full ${className}`}>
      <div className="scrolling-wrapper">
        <div className={`scrolling-content ${animClass}`}>
          {double.map((it, idx) => (
            <Card
              key={`${it.title}-${idx}`}
              title={it.title}
              colorClass={it.colorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
