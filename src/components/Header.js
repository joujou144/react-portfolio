import StraightLineIcon from "./icons/StraightLineIcon";
import LogoNameIcon from "./icons/LogoNameIcon";

const Header = ({ width }) => {
  return (
    <header>
      <div className="name">
        <StraightLineIcon
          height="20"
          viewBox="0 0 15000 810"
          width={
            width <= 400
              ? "100"
              : width <= 500
              ? "150"
              : width <= 650
              ? "250"
              : "355"
          }
          strokeWidth={
            width <= 400
              ? "420"
              : width <= 500
              ? "350"
              : width <= 650
              ? "230"
              : "150"
          }
        />
        <LogoNameIcon
          height={width <= 400 ? "60" : "80"}
          viewBox={
            width <= 400
              ? "0 0 1700 263"
              : width <= 500
              ? "0 0 1500 263"
              : width <= 650
              ? "0 0 1700 263"
              : "0 0 1500 263"
          }
          width={width <= 500 ? "300" : width <= 650 ? "370" : "450"}
        />
      </div>
      <h1>Frontend Developer</h1>
    </header>
  );
};

export default Header;
