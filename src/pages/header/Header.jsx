import "./Header.css";
import Button from "../../components/Button";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">◎</div>
        <h2>PICZEN</h2>
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">AI Avatar</a>
      </nav>

      <Button className="try-btn">Log in</Button>
    </header>
  );
};

export default Header;
