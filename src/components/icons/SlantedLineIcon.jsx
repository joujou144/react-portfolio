import React from "react";

const SlantedLineIcon = ({
  width,
  height,
  viewBox,
  strokeWidth,
  className,
  stroke,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      zoomAndPan="magnify"
      viewBox={viewBox}
      height={height}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <path
        strokeLinecap="round"
        transform="matrix(0.748913, -0.0365566, 0.0365661, 0.749108, -0.0365647, 468.59366)"
        fill="none"
        strokeLinejoin="miter"
        d="M 1.001545 0.998041 L 4080.284174 1.000431 "
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity="1"
        strokeMiterlimit="4"
      />
    </svg>
  );
};

export default SlantedLineIcon;
