import React, { useState } from "react";
import menuicon from "../assets/navbar/menuIcon.png";
import closeicon from "../assets/navbar/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <a className="title" href="/">
        Portfolio
      </a>
      {/* <div className="menu">
        <img
          className="menuBtn"
          src={menuOpen ? closeicon : menuicon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItems ${menuOpen && "menuBtnOpen"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};
