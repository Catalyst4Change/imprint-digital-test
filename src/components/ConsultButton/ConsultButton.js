import React from "react";
import "./ConsultButton.scss";
import arrow from "../../Assets/Red Arrow";
export const ConsultButton = () => {
  return (
    <button id="consult-button">
      Get your free consultation
      <div className="arrow">{arrow}</div>
    </button>
  );
};
