import React, { useState } from "react";
import hamburger from "../../../Assets/icons8-menu-50.png";
import close from "../../../Assets/icons8-close-48.png";
import "./Menu.scss";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <main id="menu">
      <button className="menu-button" onClick={openMenu}>
        {menuOpen ? (
          <img src={close} alt="menu" />
        ) : (
          <img src={hamburger} alt="menu" />
        )}
      </button>
      <section
        className={`menu-dropdown ${menuOpen ? "slide-up" : "slide-down"}`}
      >
        <p>Services</p>
        <p>Case Studies</p>
        <p>ABout</p>
        <p>Blog</p>
        <p>Resources</p>
      </section>
    </main>
  );
};
