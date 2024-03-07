// Navbar.js

import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">Logo</div>
      </div>
      <div className={`navbar__right ${isOpen ? "open" : ""}`}>
        <button className="navbar__button">Home</button>
        <button className="navbar__button">About</button>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`navbar__line ${isOpen ? "open" : ""}`}></div>
        <div className={`navbar__line ${isOpen ? "open" : ""}`}></div>
        <div className={`navbar__line ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
