import React, { useRef } from "react";
import "./MobileMenu.scss";
import hamMenu from "./Hamburger.svg";
import arrow from "../../Assets/BlackArrow";
import imprintDigitalLogo from "../../Assets/ImprintDigitalLogo";

export const MobileMenu = () => {
  const menuModal = useRef(null);

  const openMenuModal = () => {
    menuModal.current?.showModal();
  };

  const closeMenuModal = () => {
    menuModal.current?.close();
  };

  return (
    <main id="mobile-menu">
      <button onClick={openMenuModal} className="hamburger-menu-button">
        {hamMenu}
      </button>

      <dialog ref={menuModal} className="menu-modal">
        <button onClick={closeMenuModal} className="close-menu-button">
          <span className="title">Menu</span>
          <div className="arrow-container">{arrow}</div>
        </button>
        <p className="menu-option">Home</p>
        <p className="menu-option">Services</p>
        <p className="menu-option">Case Studies</p>
        <p className="menu-option">About</p>
        <p className="menu-option">BLOG</p>
        <p className="menu-option">Contact</p>
        <div className="contact-info">
          <div className="logo-container">{imprintDigitalLogo}</div>
          <p>970 518-4491</p>
          <p>
            815 14th St SW, <br /> Loveland, CO 80537
          </p>
          <button className="message-us-button">
            <span>Message us</span>
            <div className="arrow-container">{arrow}</div>
          </button>
        </div>
      </dialog>
    </main>
  );
};
