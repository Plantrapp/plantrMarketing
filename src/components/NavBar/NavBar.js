import React from "react";
import { NavLink } from "react-router-dom";
import fullLogo from "../../assets/images/Asset2.svg";
import "./NavBar.css";

const activeStyle = {
  color: "white",
};

export default function NavBar() {
  return (
    <header>
      <img className="plantr" src={fullLogo} />
      <nav>
        <NavLink to="/" activeStyle={activeStyle} className="nav-link">
          Home
        </NavLink>
        <NavLink to="/nav/about" activeStyle={activeStyle} className="nav-link">
          About
        </NavLink>
        <NavLink
          to="/nav/contact"
          activeStyle={activeStyle}
          className="nav-link"
        >
          Contact
        </NavLink>
        <NavLink
          to="/nav/support"
          activeStyle={activeStyle}
          className="nav-link"
        >
          Support
        </NavLink>
      </nav>
    </header>
  );
}
