import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to={useLocation().pathname === "/" ? "/about" : "/"}>
        {useLocation().pathname === "/" ? "Sobre" : "Home"}
      </Link>
    </footer>
  );
}

export default Footer;
