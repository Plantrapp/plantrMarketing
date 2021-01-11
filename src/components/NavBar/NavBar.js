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
        <NavLink exact to="/" activeStyle={activeStyle} className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" activeStyle={activeStyle} className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/donate" activeStyle={activeStyle} className="nav-link">
          Donate
        </NavLink>
        <NavLink to="/shop" activeStyle={activeStyle} className="nav-link">
          Shop
        </NavLink>
      </nav>
    </header>
  );
}
