import React from "react";
import bullRocket from "../../Assets/BULL ROCKET.gif";
import "./Hero.scss";
import HeroCross from "../../Assets/HeroCross";

export const Hero = ({ windowWidth }) => {
  return (
    <main
      id="hero"
      className={`plus-element ${
        windowWidth > 700 ? "horizontal" : "vertical"
      }`}
    >
      {/* top-left cross */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        {HeroCross}
      </div>
      {/* top-right cross */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(50%, -50%)",
        }}
      >
        {HeroCross}
      </div>
      {/* bottom-left cross */}
      <div
        class="bottom-left-cross"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          transform: "translate(-50%, 50%)",
        }}
      >
        {HeroCross}
      </div>
      {/* bottom-right cross */}
      <div
        class="bottom-left-cross"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(50%, 50%)",
        }}
      >
        {HeroCross}
      </div>

      {/* hero content */}
      <div className="hero-copy ">
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
