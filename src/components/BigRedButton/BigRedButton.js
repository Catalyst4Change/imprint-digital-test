import React from "react";
import "./BigRedButton.scss";
import arrow from "../../Assets/Arrow.svg";

// text is presented on button
// location is link href

export const BigRedButton = ({ text, location }) => {
  return (
    <button id="big-red-button">
      <p className="button-text">{text}</p>
      {arrow}
    </button>
  );
};
