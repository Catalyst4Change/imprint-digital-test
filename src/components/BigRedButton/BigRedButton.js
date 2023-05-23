import React from "react";
import "./BigRedButton.scss";
import arrow from "../../Assets/BlackArrow";

// text is presented on button
// location is link href

export const BigRedButton = ({ text, location }) => {
  return (
    <button id="big-red-button">
      <span className="button-text">{text}</span>
      {arrow}
    </button>
  );
};
