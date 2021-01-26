import React, { useEffect, useState } from "react";
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
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
  }, [window.innerWidth]);
  return (
    <>
      <header>
        <img src={fullLogo} />
        {windowSize > 768 ? (
          <nav>
            <NavLink
              exact
              to="/"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
              About
            </NavLink>
            <NavLink
              to="/features"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Features
            </NavLink>

            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Contact
            </NavLink>
            <NavLink
              to="/support"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Support Us
            </NavLink>
          </nav>
        ) : (
          <button
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={() => setShowMenu(!showMenu)}
          >
            &#9776;
          </button>
        )}
      </header>
      {windowSize < 768 && showMenu === true ? (
        <nav>
          <div className="mobile-spacer"></div>
          <NavLink
            exact
            to="/"
            activeStyle={activeStyle}
            className="nav-link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={activeStyle}
            className="nav-link"
            onClick={() => setShowMenu(!showMenu)}
          >
            About
          </NavLink>
          <NavLink
            to="/features"
            activeStyle={activeStyle}
            className="nav-link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Features
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={activeStyle}
            className="nav-link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/support"
            activeStyle={activeStyle}
            className="nav-link"
            onClick={() => setShowMenu(!showMenu)}
          >
            Support Us
          </NavLink>
        </nav>
      ) : null}
    </>
  );
}
//add in sign-in/login button to the nav bar
