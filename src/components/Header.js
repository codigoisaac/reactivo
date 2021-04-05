import Button from "./Button";

const Header = ({ onAddClick, showForm }) => {
  return (
    <header className="header">
      <h1>Reactivo</h1>
      <Button text={showForm ? "Close" : "Add"} onClick={onAddClick} />
    </header>
  );
};

export default Header;
