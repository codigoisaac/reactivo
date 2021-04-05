import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAddClick, showForm }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Reactivo</h1>
      {location.pathname === "/" && (
        <Button text={showForm ? "Close" : "Add"} onClick={onAddClick} />
      )}
    </header>
  );
};

export default Header;
