import React from "react";
import "./BigRedButton.scss";

// text is presented on button
// location is link href

export const BigRedButton = ({ text, location }) => {
  return (
    <button id="big-red-button">
      <p className="button-text">{text}</p>
      <svg
        className="arrow"
        viewBox="0 0 28 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9L27 9V7L0 7L0 9Z"
          fill="white"
        />
      </svg>
    </button>
  );
};