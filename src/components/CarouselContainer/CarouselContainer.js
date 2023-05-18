import React, { children, useEffect, useRef, useState } from "react";
import "./CarouselContainer.scss";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import arrow from "../../Assets/BlackArrow";

// component takes in an array of objects
// { title: string, imgURL: string}

/* 
note: the width and margin of the carousel items 
are integral to the calculation of the carousel. 
do not change these attributes in CSS or you will 
break the flow
*/

export const CarouselContainer = ({ carouselItems }) => {
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselLength] = useState(carouselItems.length);
  const [itemWidth] = useState(345);
  const [itemMargin] = useState(75);
  const [carouselShift] = useState(itemWidth + itemMargin);
  const [touchPosition, setTouchPosition] = useState(null);
  const [transition, setTransition] = useState("all 0.5s ease-in-out");
  const [transform, setTransform] = useState(-carouselShift);

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
      advanceCarouselIndex();
    } else if (diff < -5) {
      retardCarouselIndex();
    }

    setTouchPosition(null);
  };

  // handle carousel index

  const advanceCarouselIndex = () => {
    const newTransform = carouselShift * (carouselIndex + 1);
    const newIndex = carouselIndex + 1;
    setCarouselIndex(newIndex);
    setTransform(-newTransform);
  };

  const retardCarouselIndex = () => {
    const newTransform = carouselShift * (carouselIndex - 1);
    const newIndex = carouselIndex - 1;
    setCarouselIndex(newIndex);
    setTransform(-newTransform);
  };

  // handle end of carousel
  const handleTransitionEnd = () => {
    if (carouselIndex === 0) {
      console.log(-(carouselShift * carouselLength));
      setTransition("none");
      setTransform(-carouselShift * carouselLength);
      setCarouselIndex(carouselLength);
    } else if (carouselIndex === carouselLength) {
      setTransition("none");
      setTransform(0);
      setCarouselIndex(0);
    }
    setTimeout(() => {
      setTransition("all 0.5s ease-in-out");
    }, 100);
  };

  const loopCarouselLeft = () => {
    let output = [];
    output.push(displayCarouselItems());
    return output;
  };

  const loopCarouselRight = () => {
    let output = [];
    output.push(displayCarouselItems());
    return output;
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <h2 className="title">
        who we <span>serve</span>
      </h2>
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(${transform}px)`,
          transition: transition,
        }}
        onTransitionEnd={() => handleTransitionEnd()}
      >
        {loopCarouselLeft()}
        {displayCarouselItems()}
        {loopCarouselRight()}
      </div>
      <div className="buttons-container">
        <button className="carousel-button" onClick={retardCarouselIndex}>
          {arrow}
        </button>
        <button
          className="carousel-button right"
          onClick={advanceCarouselIndex}
        >
          {arrow}
        </button>
      </div>
    </div>
  );
};
