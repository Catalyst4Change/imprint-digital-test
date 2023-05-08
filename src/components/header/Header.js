import React, { useState } from "react";
import angleArrow from "../../Assets/Pop Out Arrow";
import ImprintDigitalLogo from "../../Assets/ImprintDigitalLogo";
import "./Header.scss";
import "../../index.scss";

export const Header = () => {
  const [showServices, setShowServices] = useState(false);
  return (
    <main id="header">
      <nav>
        <div className="nav-item logo">{ImprintDigitalLogo}</div>
        <button
          class="nav-item services"
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          Services <div class="arrow-down" />
        </button>
        <button class="nav-item">
          Case Studies <div class="arrow-down" />
        </button>
        <button class="nav-item">
          About <div class="arrow-down" />
        </button>
        <button class="nav-item">
          Blog <div class="arrow-down" />
        </button>
        <button class="nav-item">
          Resources <div class="arrow-down" />
        </button>
        <button class="nav-item boxed">Contact {angleArrow}</button>
        {/* <button class="nav-item drop-down"></button> */}
      </nav>
      <section
        id="dropdown"
        class={`${showServices ? "visible" : "invisible"}`}
        onMouseEnter={() => setShowServices(true)}
        onMouseLeave={() => setShowServices(false)}
      >
        <section class="dropdown-section left">
          <h4 className="title">CMO SERVICES</h4>
          <ul className="service-list">
            <li>Vision and Strategy</li>
            <li>Brand, Story, Execution</li>
            <li>Brand, Story, Execution</li>
            <li>Leadership</li>
          </ul>
        </section>
        <div className="vert-line" />
        <section class="dropdown-section center">{ImprintDigitalLogo}</section>
        <section class="dropdown-section center">{ImprintDigitalLogo}</section>
        <div className="vert-line" />
        <section class="dropdown-section right">
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
