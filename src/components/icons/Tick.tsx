import React from "react";
import WidthIcon from "./WidthIcon";

function Tick({ ...props }) {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.63321 1.57597C9.89356 1.31562 9.89356 0.893513 9.63321 0.633164C9.37286 0.372815 8.95075 0.372813 8.6904 0.633163L3.50495 5.81861L1.14792 3.46159C0.887575 3.20124 0.465465 3.20124 0.205116 3.46159C-0.0552337 3.72194 -0.0552335 4.14405 0.205116 4.4044L3.03354 7.23283C3.04981 7.2491 3.06672 7.26435 3.08417 7.27859C3.34602 7.49216 3.73227 7.4769 3.97635 7.23283C3.97654 7.23264 3.97673 7.23245 3.97692 7.23226L9.63321 1.57597Z"
        fill="black"
        fill-opacity="0.8"
      />
    </svg>
  );
}

export default WidthIcon(Tick);
