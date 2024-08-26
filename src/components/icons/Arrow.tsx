import React from "react";
import WidthIcon from "./WidthIcon";

function Arrow({ ...props }) {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0627 0.83333L5.24063 6.16666L0.43758 0.83333L10.0627 0.83333Z"
        fill="#BCBDBD"
      />
    </svg>
  );
}

export default WidthIcon(Arrow);
