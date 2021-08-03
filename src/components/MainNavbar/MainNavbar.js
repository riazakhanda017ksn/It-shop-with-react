import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 170) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav
      class={
        navbar
          ? "navbar navbar-expand-lg navbar-light fixed-top navBg"
          : "navbar navbar-expand-lg navbar-light fixed-top "
      }
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <span className="mr-4">
            <h2>Your It Shop</h2>
          </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navbar-customize navItem ">
            <li>
              <Link to="/home">Home </Link>
            </li>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin">About</Link>
            </li>

            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/home">
                <span>
                  <FontAwesomeIcon icon={faShoppingBag} />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
