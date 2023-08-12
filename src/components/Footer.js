import StraightLineIcon from "./icons/StraightLineIcon";

const Footer = ({ width }) => {
  return (
    <footer>
      <p>&copy; thinkaholic.me</p>

      <StraightLineIcon
        stroke="#e4e4e4"
        height="10"
        width={
          width <= 380
            ? "70"
            : width <= 580
            ? "200"
            : width <= 780
            ? "320"
            : "570"
        }
        strokeWidth={
          width <= 400
            ? "220"
            : width <= 580
            ? "170"
            : width <= 770
            ? "160"
            : "150"
        }
        viewBox={
          width <= 420
            ? "0 0 7000 710"
            : width <= 580
            ? "0 0 12000 710"
            : width <= 770
            ? "0 0 18000 710"
            : "0 0 24000 710"
        }
      />
    </footer>
  );
};

export default Footer;
