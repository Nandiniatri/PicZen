// import React from "react";
// import "./Header.css";
// import Button from "../../components/Button";

// const Header = () => {
//   return (
//     <header className="header">
//       <h1 className="logo">Logo</h1>

//       <nav className="nav">
//         <a href="#" className="nav-link">Product</a>
//         <a href="#" className="nav-link">Solution</a>
//       </nav>

//       <div className="btn-group">
//         <Button>Log in</Button>
//         <Button>Start creating</Button>
//       </div>
//     </header>
//   );
// };

// export default Header;



import "./Header.css";
import Button from "../../components/Button";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">◎</div>
        <h2>idea AI</h2>
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
