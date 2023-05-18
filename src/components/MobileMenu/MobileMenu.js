import React, { useRef, useState } from "react";
import "./MobileMenu.scss";
import hamMenu from "./Hamburger.svg";

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
      <button onClick={openMenuModal} className="main-menu-button">
        {hamMenu}
      </button>
      <div className="dialog-container">
        <dialog ref={menuModal} className="menu-selector test">
          <p className="menu-option title">Menu</p>
          <p className="menu-option">Home</p>
          <p className="menu-option">Services</p>
          <p className="menu-option">Case Studies</p>
          <p className="menu-option">About</p>
          <p className="menu-option">BLOG</p>
          <p className="menu-option">Resources</p>
          <p className="menu-option">Contact</p>
          <button
            onClick={closeMenuModal}
            className="menu-option menu-close-button"
          >
            ☒ Close
          </button>
        </dialog>
      </div>
    </main>
  );
};
