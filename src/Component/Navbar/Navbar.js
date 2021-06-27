import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-white m-auto mb-3">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          <img className="logo1 " src="./images/logo.JPG" />
        </NavLink>

        <button
          className="navbar-toggler btn0"
          data-toggle="collapse"
          data-target="#navbarSuportedContent"
          aria-controls="navbarSuportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSuportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active ">
              <NavLink className="nav-link" to="/Home" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/About" exact>
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/Themes"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                exact
              >
                Themes
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="#" className="dropdown-item text-dark btn1">
                  Shop Full Width
                </NavLink>
                <NavLink to="#" className="dropdown-item text-dark btn1">
                  Shop Left Sidebar
                </NavLink>
                <NavLink to="#" className="dropdown-item text-dark btn1">
                  Shop Right Sidebar
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/Pages"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                exact
              >
                Pages
              </NavLink>
              <div className="dropdown-menu ">
                <NavLink
                  to="#"
                  className="dropdown-item text-dark btn-light btn1"
                >
                  Services
                </NavLink>
                <NavLink to="#" className="dropdown-item text-dark btn1">
                  Pricing Plan
                </NavLink>
                <NavLink to="#" className="dropdown-item text-dark btn1">
                  Team
                </NavLink>
                <NavLink to="#" className="dropdown-item text-dark btn1">
                  Blog
                </NavLink>
              </div>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Contact" exact>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
