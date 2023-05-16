import React from "react";
import "./Carousel.scss";
import { CarouselItem } from "./CarouselItem/CarouselItem";

// component takes in an array of objects
// { title: string, imgURL: url string}

export const Carousel = ({ items }) => {
  const displayCarouselItems = () => {
    return items.map((item, i) => {
      return <CarouselItem title={item.title} imgURL={item.imgURL} />;
    });
  };
  return <div className="carousel-container">{displayCarouselItems()}</div>;
};
