import React from "react";
import Card from "./Card";

export default function AutoScrollRow({
  items = [],
  direction = "left",
  className = "",
}) {
  const double = [...items, ...items]; // duplicamos para loop continuo
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
