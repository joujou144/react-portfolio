const VerticalLineIcon = ({ className, width, height, viewBox }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    zoomAndPan="magnify"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
    viewBox={viewBox}
  >
    <path
      strokeLinecap="butt"
      transform="matrix(0.000000000000000046, 0.75, -0.75, 0.000000000000000046, 405.374983, 0.00002)"
      fill="none"
      strokeLinejoin="miter"
      d="M -0.0000266667 0.499977 L 1080.000028 0.499977 "
      strokeOpacity="0.8"
      strokeMiterlimit="4"
    />
  </svg>
);

export default VerticalLineIcon;
