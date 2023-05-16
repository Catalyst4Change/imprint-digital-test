import React from "react";
import "./Carousel.scss";

export const Carousel = ({ title, imgURL }) => {
  return (
    <div className="carousel-container">
      <div class="carousel-item">
        <svg
          className="grey-flags"
          width="36"
          height="91"
          viewBox="0 0 36 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-8.07666e-07 71.7997L0 90.277L36 55.2472L36 36.0001L-8.07666e-07 71.7997Z"
            fill="#C0C0C0"
          />
          <path
            d="M-4.70582e-07 56.2498L0 67.0154L36 32.027L36 20.4924L-4.70582e-07 56.2498Z"
            fill="#C0C0C0"
          />
          <path
            d="M-2.88092e-07 44.917L0 51.5078L36 16.2278L36 8.8616L-2.88092e-07 44.917Z"
            fill="#C0C0C0"
          />
          <path
            d="M-1.69231e-07 36.0054L0 39.877L36 4.64588L36 2.8944e-05L-1.69231e-07 36.0054Z"
            fill="#C0C0C0"
          />
        </svg>
        <img className="clipped-image" src={imgURL} />
        <svg
          className="title-bar"
          width="201"
          height="33"
          viewBox="0 0 201 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 32.5V0H200.5L156 32.5H0Z" fill="#E11F26" />
        </svg>
        <span className="title-text">{title}</span>
      </div>
    </div>
  );
};
