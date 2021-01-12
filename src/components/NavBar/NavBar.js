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
      <img class="plantr" src={fullLogo} />
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
          to="/nav/donate"
          activeStyle={activeStyle}
          className="nav-link"
        >
          Donate
        </NavLink>
        <NavLink to="/nav/shop" activeStyle={activeStyle} className="nav-link">
          Shop
        </NavLink>
      </nav>
    </header>
  );
}
