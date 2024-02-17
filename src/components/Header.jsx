import harryPotterLogo from "../images/harryPotterLogo.webp";

function Header() {
  return (
    <header className="header">
      {/* <h1 className="header-title">Harry Potter</h1> */}
      <img className="logo" src={harryPotterLogo} alt="HP Logo" />
    </header>
  );
}

export default Header;
