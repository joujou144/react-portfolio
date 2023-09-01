import VerticalLineIcon from "./icons/VerticalLineIcon";
const Footer = ({ width }) => {
  return (
    <footer>
      <VerticalLineIcon
        className="footer-line line-icon"
        viewBox="0 0 800 800"
        width="400"
        height="400"
      />
      <p>&copy; thinkaholic.me</p>
    </footer>
  );
};

export default Footer;
