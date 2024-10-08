import React from "react";
import WidthIcon from "./WidthIcon";

function QuestionMark({ ...props }) {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00704 3H0.333374C0.419971 1.51528 1.65585 0.333336 3.16186 0.333336C4.72381 0.333336 5.99519 1.60472 5.99519 3.16667C5.99519 4.39772 5.20591 5.44838 4.10613 5.8386L3.99519 5.87796V7.002H2.32853V5.16667C2.32853 4.70672 2.70191 4.33334 3.16186 4.33334C3.8048 4.33334 4.32853 3.81083 4.32853 3.16667C4.32853 2.52251 3.8048 2 3.16186 2C2.5754 2 2.08812 2.43475 2.00704 3Z"
        fill="white"
        fillOpacity="0.7"
      />
      <path
        d="M2.32853 9.16667C2.32853 8.70672 2.70191 8.33334 3.16186 8.33334C3.62181 8.33334 3.99519 8.70672 3.99519 9.16667C3.99519 9.62751 3.62192 10 3.16186 10C2.7018 10 2.32853 9.62751 2.32853 9.16667Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  );
}

export default WidthIcon(QuestionMark);
