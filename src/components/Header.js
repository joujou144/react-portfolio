import LogoNameIcon from "./icons/LogoNameIcon";
import HorizontalLineIcon from "./icons/HorizontalLineIcon";

const Header = ({ width, setActiveTab }) => {
  return (
    <header>
      <div onClick={() => setActiveTab(null)}>
        <LogoNameIcon
          className="name-icon"
          viewBox={
            width <= 400
              ? "0 0 1700 263"
              : width <= 500
              ? "0 0 1500 263"
              : width <= 650
              ? "0 0 1700 263"
              : "0 0 1500 263"
          }
          width={width <= 650 ? "230" : "280"}
        />
      </div>

      <div className="line-icon cursor-pointer">
        <HorizontalLineIcon
          height="20"
          className="header-line"
          viewBox="0 0 37000 810"
          width={width <= 650 ? "450" : "885"}
          strokeWidth="30"
        />
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/aznimrahman">{"LinkedIn"}</a>
        <a href="https://github.com/joujou144">{"Github"}</a>
        <a href="https://www.linkedin.com/in/aznimrahman">{"Contact"}</a>
      </div>
    </header>
  );
};

export default Header;
