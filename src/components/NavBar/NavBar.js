import React from "react";
import { NavLink } from "react-router-dom";
import fullLogo from "../../assets/images/Asset2.svg";

import "./NavBar.css";

const activeStyle = {
  color: "white",
  borderBottom: "1px solid white",
  transitionProperty: "border-bottom",
  transition: "0.3s ease-in-out",
};

export default function NavBar() {
  return (
    <header>
      <img src={fullLogo} />
      <nav>
        <NavLink exact to="/" activeStyle={activeStyle} className="nav-link">
          Home
        </NavLink>
        {/* <NavLink to="/features" activeStyle={activeStyle} className="nav-link">
          Features
        </NavLink> */}
        <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" activeStyle={activeStyle} className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/support" activeStyle={activeStyle} className="nav-link">
          Support Us
        </NavLink>
      </nav>
    </header>
  );
}
