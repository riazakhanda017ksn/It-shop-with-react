import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../images/user-interface.png";
import "./Headers.css";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 170) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <nav
        class={
          navbar
            ? "navbar navbar-expand-lg navbar-light background  background fixed-top"
            : "navbar navbar-expand-lg navbar-light fixed-top  "
        }
      >
        <div className="container-fluid">
          <Link to="/">
            <div className="div-for-logo">
              <img src={img} alt="" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/order">Orders</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>

              <li onClick={() => setLoggedInUser({})}>
                {loggedInUser?.email ? (
                  <Link to="/">Log Out</Link>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
