import React from "react";
import bullRocket from "../../Assets/BULL ROCKET.gif";
import "./Hero.scss";

export const Hero = () => {
  return (
    <main id="hero">
      <div className="hero-text">
        <h1>Digital Marketing Solutions That Work</h1>
        <b>
          Stop getting burned by digital marketing companies.
          <br />
          Your digital marketing partner that ensures your brand thrives.
        </b>
      </div>
      <img
        src={bullRocket}
        alt="NASA rocket taking off inside the silhouette of a bull"
        className="hero-image"
      />
    </main>
  );
};
