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
      {/* top-left cross */}
      <svg
        class="svg-element"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <rect x="9" y="0" width="2" height="20" fill="lightgrey" />
        <rect x="0" y="9" width="20" height="2" fill="lightgrey" />
      </svg>
      {/* top-right cross */}
      <svg
        class="svg-element"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          transform: "translate(50%, -50%)",
        }}
      >
        <rect x="9" y="0" width="2" height="20" fill="lightgrey" />
        <rect x="0" y="9" width="20" height="2" fill="lightgrey" />
      </svg>
      {/* bottom-right cross */}
      <svg
        class="svg-element"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(50%, 50%)",
        }}
      >
        <rect x="9" y="0" width="2" height="20" fill="lightgrey" />
        <rect x="0" y="9" width="20" height="2" fill="lightgrey" />
      </svg>
      {/* bottom-left cross */}
      <svg
        class="svg-element"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          transform: "translate(-50%, 50%)",
        }}
      >
        <rect x="9" y="0" width="2" height="20" fill="lightgrey" />
        <rect x="0" y="9" width="20" height="2" fill="lightgrey" />
      </svg>

      {/* hero content */}
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
