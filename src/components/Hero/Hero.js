import React from "react";
import bullRocket from "../../Assets/BULL ROCKET.gif";
import "./Hero.scss";

export const Hero = ({ windowWidth }) => {
  const line = {
    position: "absolute",
    width: "20px",
    height: "2px",
    backgroundColor: "lightgrey",
  };

  return (
    <main
      id="hero"
      className={`plus-element ${
        windowWidth > 700 ? "horizontal" : "vertical"
      }`}
    >
      {/* top left cross */}
      <div
        style={{
          ...line,
          top: 0,
          left: 0,
          transform: "translateX(-50%)",
        }}
      ></div>
      <div
        style={{
          ...line,
          top: 0,
          left: 0,
          transform: "translateX(-50%) rotate(90deg)",
        }}
      ></div>
      {/* top right cross */}
      <div
        style={{
          ...line,
          top: 0,
          right: 0,
          transform: "translateX(50%)",
        }}
      ></div>
      <div
        style={{
          ...line,
          top: 0,
          right: 0,
          transform: "translateX(50%) rotate(90deg)",
        }}
      ></div>
      {/* bottom right cross */}
      <div
        style={{
          ...line,
          bottom: 0,
          right: 0,
          transform: "translateX(50%)",
        }}
      ></div>
      <div
        style={{
          ...line,
          bottom: 0,
          right: 0,
          transform: "translateX(50%) rotate(90deg)",
        }}
      ></div>
      {/* top left cross */}
      <div
        style={{
          ...line,
          bottom: 0,
          left: 0,
          transform: "translateX(-50%)",
        }}
      ></div>
      <div
        style={{
          ...line,
          bottom: 0,
          left: 0,
          transform: "translateX(-50%) rotate(90deg)",
        }}
      ></div>

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
