import React, { useState, useEffect } from "react";
import angleArrow from "../../Assets/Pop Out Arrow";
import ImprintDigitalLogo from "../../Assets/ImprintDigitalLogo";
import "./Header.scss";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = ({ windowWidth }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <main id="header">
      {windowWidth > 700 ? (
        <nav className={`${windowWidth > 900 ? "horizontal" : "vertical"}`}>
          <div className="logo">{ImprintDigitalLogo}</div>
          <div className="items">
            <button
              className="nav-item services"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              Services <div className="arrow-down" />
            </button>
            <button className="nav-item">
              Case Studies <div className="arrow-down" />
            </button>
            <button className="nav-item">
              About <div className="arrow-down" />
            </button>
            <button className="nav-item">
              Blog <div className="arrow-down" />
            </button>
            <button className="nav-item">
              Resources <div className="arrow-down" />
            </button>
            <button className="contact-button">Contact {angleArrow}</button>
          </div>
        </nav>
      ) : (
        <div className="mobile-menu">
          <div className="logo left-side">{ImprintDigitalLogo}</div>
          <div className="right-side">
            <button className="contact-button">Contact {angleArrow}</button>
            <MobileMenu />
          </div>
        </div>
      )}
    </main>
  );
};
