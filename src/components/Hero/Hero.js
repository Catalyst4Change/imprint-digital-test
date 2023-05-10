import React from "react";
import bullRocket from "../../Assets/BULL ROCKET.gif";
import "./Hero.scss";

export const Hero = ({ windowWidth }) => {
  return (
    <main
      id="hero"
      className={`${windowWidth > 500 ? "horizontal" : "vertical"}`}
    >
      <div className="hero-copy">
        <h1 className="hero-title">Digital Marketing Solutions That Work</h1>
        <p className="hero-text">
          Stop getting burned by digital marketing companies.
          <br />
          Your digital marketing partner that ensures your brand thrives.
        </p>
      </div>
      <img
        src={bullRocket}
        alt="NASA rocket taking off inside the silhouette of a bull"
        className="hero-image"
      />
    </main>
  );
};
