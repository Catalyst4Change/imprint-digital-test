import React from "react";
import "./CarouselItem.scss";
import greyFlags from "../../../Assets/GreyFlags.svg";
import redBar from "../../../Assets/RedBar.svg";

export const CarouselItem = ({ width, margin, title, imgURL }) => {
  return (
    <div
      className="carousel-item"
      style={{ width: `${width}px`, marginRight: `${margin}px` }}
    >
      <div className="grey-flags"> {greyFlags} </div>
      <div className="title-bar"> {redBar}</div>
      <img className="clipped-image" src={imgURL} alt={title} />
      <span className="title-text">{title}</span>
      <div className="gradient-overlay"></div>
    </div>
  );
};
