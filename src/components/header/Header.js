import React, { useState, useEffect } from "react";
import angleArrow from "../../Assets/Pop Out Arrow";
import ImprintDigitalLogo from "../../Assets/ImprintDigitalLogo";
import "./Header.scss";
import { Menu } from "./Menu/Menu";

export const Header = ({ windowWidth }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <main id="header">
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
          <button className="nav-item contact-button">
            Contact {angleArrow}
          </button>
        </div>
      </nav>

      <section
        id="dropdown"
        className={`${showServices ? "visible" : "invisible"}`}
        onMouseEnter={() => setShowServices(true)}
        onMouseLeave={() => setShowServices(false)}
      >
        <section className="dropdown-section left">
          <h4 className="title">CMO SERVICES</h4>
          <ul className="service-list">
            <li>Vision and Strategy</li>
            <li>Brand, Story, Execution</li>
            <li>Brand, Story, Execution</li>
            <li>Leadership</li>
          </ul>
        </section>
        <div className="vert-line" />
        <section className="dropdown-section center">
          {ImprintDigitalLogo}
        </section>
        <section className="dropdown-section center">
          {ImprintDigitalLogo}
        </section>
        <div className="vert-line" />
        <section className="dropdown-section right">
          <h3>
            Know more about what a Fractional CMO can do for your business
          </h3>
          <input type="text" placeholder="SEND US YOUR EMAIL" />
          <div className="input-arrow">{angleArrow}</div>
        </section>
      </section>
    </main>
  );
};
