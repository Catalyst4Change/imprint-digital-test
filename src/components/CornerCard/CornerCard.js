import React, { useState } from "react";
import "./CornerCard.scss";
import { CornerCardBackground } from "./CornerCardBackground/CornerCardBackground";

// component takes in props of card
// card: { title: string, copy: string }

export const CornerCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main
      className="corner-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-text">
        <h2 className="card-title">{card.title}</h2>
        <p className="card-copy">{card.copy}</p>
      </div>
      <div className="background-svg">
        <CornerCardBackground isHovered={isHovered} />
      </div>
    </main>
  );
};
