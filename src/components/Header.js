import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onAddClick, showForm }) => {
  return (
    <header className="header">
      <h1>Reactivo</h1>
      {useLocation().pathname === "/" && (
        <Button text={showForm ? "Fechar" : "Add"} onClick={onAddClick} />
      )}
    </header>
  );
};

export default Header;
