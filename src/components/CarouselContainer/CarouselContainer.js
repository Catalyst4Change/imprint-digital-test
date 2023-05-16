import React, { children, useState } from "react";
import "./CarouselContainer.scss";
import { CarouselItem } from "./CarouselItem/CarouselItem";

// component takes in an array of objects
// { title: string, imgURL: string}

export const CarouselContainer = ({ carouselItems }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemWidth] = useState(345);
  const [itemMargin] = useState(20);
  const [touchPosition, setTouchPosition] = useState(null);

  const carouselShift = itemWidth + itemMargin;

  const displayCarouselItems = () => {
    return carouselItems.map((item, i) => {
      return (
        <CarouselItem
          key={i}
          width={itemWidth}
          margin={itemMargin}
          title={item.title}
          imgURL={item.imgURL}
        />
      );
    });
  };

  // touch-specific controls
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      retardCarouselIndex();
    } else if (diff < -5) {
      advanceCarouselIndex();
    }

    setTouchPosition(null);
  };

  const advanceCarouselIndex = () => {
    setCarouselIndex((carouselIndex) => carouselIndex + 1);
  };

  const retardCarouselIndex = () => {
    setCarouselIndex((carouselIndex) => carouselIndex - 1);
  };

  const arrow = () => {
    return (
      <svg
        width="52"
        height="24"
        viewBox="0 0 52 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM52 13.5H2V10.5H52V13.5Z"
          fill="black"
        />
      </svg>
    );
  };
  return (
    <>
      <div
        className="carousel-container test"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {"carouselIndex : "} {carouselIndex}
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(${carouselIndex * carouselShift}px)`,
          }}
        >
          {displayCarouselItems()}{" "}
        </div>
      </div>
      <div className="buttons">
        <button className="carousel-button" onClick={advanceCarouselIndex}>
          {arrow()}
        </button>
        <button className="carousel-button right" onClick={retardCarouselIndex}>
          {arrow()}
        </button>
      </div>
    </>
  );
};
