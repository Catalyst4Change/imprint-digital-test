import React from "react";
import angleArrow from "../../Assets/Pop Out Arrow";
import ImprintDigitalLogo from "../../Assets/ImprintDigitalLogo";
import "./Header.scss";
import "../../index.css";

export const Header = () => {
  return (
    <section id="header">
      {ImprintDigitalLogo}
      <nav className="">
        <button class="nav-item">
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
        <button class="nav-item drop-down"></button>
      </nav>
    </section>
  );
};
