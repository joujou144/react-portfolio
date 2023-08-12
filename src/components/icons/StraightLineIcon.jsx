const StraightLineIcon = ({
  width,
  height,
  viewBox,
  className,
  stroke,
  strokeWidth,
}) => (
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
      transform="matrix(0.749934, 0, 0, 0.75, 0.0000035, 402.75)"
      fill="transparent"
      strokeLinejoin="miter"
      d="M 3.000259 3.000001 L 90000.093525 3.000001 "
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity="0.8"
      strokeMiterlimit="4"
    />
  </svg>
);

export default StraightLineIcon;
