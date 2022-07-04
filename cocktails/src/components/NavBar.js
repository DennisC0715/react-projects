import React from "react";
import logo from "../logoA.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
