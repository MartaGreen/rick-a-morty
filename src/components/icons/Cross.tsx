import React from "react";

function Cross({ ...props }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.195317 0.195209C-0.065033 0.455558 -0.0650328 0.877668 0.195317 1.13802L3.21903 4.16173L0.195262 7.1855C-0.0650874 7.44585 -0.0650874 7.86796 0.195262 8.1283C0.455612 8.38865 0.877721 8.38865 1.13807 8.1283L4.16184 5.10454L7.1855 8.1282C7.44585 8.38855 7.86796 8.38855 8.12831 8.1282C8.38866 7.86786 8.38866 7.44575 8.12831 7.1854L5.10465 4.16173L8.12826 1.13812C8.38861 0.877769 8.38861 0.455659 8.12826 0.195309C7.86791 -0.06504 7.4458 -0.0650398 7.18545 0.195309L4.16184 3.21892L1.13813 0.195209C0.877776 -0.0651408 0.455666 -0.0651408 0.195317 0.195209Z"
        fill="black"
        fill-opacity="0.8"
      />
    </svg>
  );
}

export default Cross;
