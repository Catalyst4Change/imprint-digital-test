import React from "react";
import "./CornerCardBackground.scss";

export const CornerCardBackground = ({ isHovered }) => {
  return (
    <svg viewBox="0 0 347 289" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`grey-flag ${isHovered ? "active" : "normal"}`}
        d="M270.446 250.882H250.882L287.973 289H308.352L270.446 250.882Z"
        fill="#C3C3C3"
      />
      <path
        className={`grey-flag ${isHovered ? "active" : "normal"}`}
        d="M286.911 250.882H275.512L312.559 289H324.772L286.911 250.882Z"
        fill="#C3C3C3"
      />
      <path
        className={`grey-flag ${isHovered ? "active" : "normal"}`}
        d="M298.911 250.882H291.932L329.287 289H337.087L298.911 250.882Z"
        fill="#C3C3C3"
      />
      <path
        className={`grey-flag ${isHovered ? "active" : "normal"}`}
        d="M308.346 250.882H304.247L341.551 289H346.47L308.346 250.882Z"
        fill="#C3C3C3"
      />
      <path
        d="M40.1383 4.17635L5.23535 40.1491V276.294H341.941V4.17635H40.1383Z"
        fill="#E11F26"
      />
      <path
        d="M53.6775 0.999878L1 55.0654V269.941H346.176V0.999878H53.6775Z"
        className={`main-box ${isHovered ? "active" : "normal"}`}
      />
    </svg>
  );
};
