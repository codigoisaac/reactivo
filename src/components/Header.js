import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>Reactivo</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};

export default Header;
