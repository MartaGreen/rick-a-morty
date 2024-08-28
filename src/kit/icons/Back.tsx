import React from "react";
import WidthIcon from "./WidthIcon";

function Back({ ...props }) {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 6.94975C-0.0976312 6.55922 -0.097631 5.92606 0.292893 5.53553L5.53553 0.292893C5.92606 -0.0976313 6.55922 -0.097631 6.94975 0.292893C7.34027 0.683418 7.34027 1.31658 6.94975 1.70711L3.41421 5.24264H15.2425C15.7948 5.24264 16.2425 5.69036 16.2425 6.24264C16.2425 6.79493 15.7948 7.24264 15.2425 7.24264H3.41421L6.94975 10.7782C7.34027 11.1687 7.34027 11.8019 6.94975 12.1924C6.55922 12.5829 5.92606 12.5829 5.53553 12.1924L0.292893 6.94975Z"
        fill="white"
      />
    </svg>
  );
}

export default WidthIcon(Back);
