import React, { useState } from "react";
import angleArrow from "../../Assets/Pop Out Arrow";
import ImprintDigitalLogo from "../../Assets/ImprintDigitalLogo";
import "./Header.scss";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import YardHouse from "../../Assets/images/YardHouseCreations.png";
import arrow from "../../Assets/Arrow.svg";

export const Header = ({ windowWidth }) => {
  // logic directly applies className to #dropdown
  const [showServices, setShowServices] = useState("");
  const [breakpoint] = useState(850);

  return (
    <main id="header">
      {windowWidth > breakpoint ? (
        <div className="desktop-menu">
          <nav>
            <div className="logo">{ImprintDigitalLogo}</div>
            <div className="items">
              <button
                className="nav-item services"
                onMouseEnter={() => setShowServices("hovered")}
                onMouseLeave={() => setShowServices("")}
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

          {/* SERVICES DROPDOWN SECTION */}

          <section id="dropdown" className={showServices}>
            <div className="dropdown-section left">
              <h4 className="section-title">CMO services</h4>
              <ul className="service-list">
                <li>Vision & Strategy</li>
                <li>Brand, story, execution</li>
                <li>Aquisition & Relations</li>
                <li>Leadership</li>
              </ul>
            </div>
            <div className="vert-line" />
            <div className="dropdown-section center">
              <img src={YardHouse} alt="Yardhouse" />
              <p>
                How we Helped Yardhouse Creations Maximize ROI with Social Media
                Management and Paid Ads
              </p>
              <div className="case-study">
                <span>View Case study</span>
                <div className="arrow">{arrow}</div>
              </div>
            </div>
            <div className="dropdown-section center">
              <img src={YardHouse} alt="Yardhouse" />
              <p>
                How we Helped Yardhouse Creations Maximize ROI with Social Media
                Management and Paid Ads
              </p>
              <div className="case-study">
                <span>View Case study</span>
                <div className="arrow">{arrow}</div>
              </div>
            </div>
            <div className="vert-line" />
            <div className="dropdown-section right">
              <h4>
                Know more about what a Fractional CMO can do for your business
              </h4>
              <input placeholder="SEND US YOUR EMAIL" />
              <div className="input-arrow">{angleArrow}</div>
            </div>
          </section>
        </div>
      ) : (
        <nav className="mobile-menu">
          <div className="logo left-side">{ImprintDigitalLogo}</div>
          <div className="right-side">
            <button className="contact-button">Contact {angleArrow}</button>
            <div className="mobile-menu-container">
              <MobileMenu />
            </div>
          </div>
        </nav>
      )}
    </main>
  );
};
