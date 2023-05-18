import React, { useState } from "react";
import "./CarouselItem.scss";
import SlashFlags from "../../../Assets/SlashFlags.svg";
import redBar from "../../../Assets/RedBar.svg";

export const CarouselItem = ({ width, margin, title, imgURL }) => {
  const [hover, setHover] = useState(null);
  return (
    <div
      className="carousel-item"
      style={{ width: `${width}px`, marginRight: `${margin}px` }}
      onMouseEnter={() => setHover("hovered")}
      onMouseLeave={() => setHover(null)}
    >
      <div className={`grey-flags ${hover}`}>{SlashFlags} </div>
      <div className="title-bar"> {redBar}</div>
      <img className="clipped-image" src={imgURL} alt={title} />
      <span className="title-text">{title}</span>
      <div className="gradient-overlay"></div>
    </div>
  );
};
