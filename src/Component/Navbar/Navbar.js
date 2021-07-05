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
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                exact
              >
                Themes
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/ShopFullWidth" className="dropdown-item text-dark btn1">
                  Shop Full Width
                </NavLink>
                
                <NavLink to="/ShopRightSidebar" className="dropdown-item text-dark btn1">
                  Shop Right Sidebar
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                exact
              >
                Pages
              </NavLink>
              <div className="dropdown-menu ">
                <NavLink
                  to="/Service"
                  className="dropdown-item text-dark btn-light btn1"
                >
                  Services
                </NavLink>
                <NavLink to="/PricingPlan" className="dropdown-item text-dark btn1">
                  Pricing Plan
                </NavLink>
                <NavLink to="/Team" className="dropdown-item text-dark btn1">
                  Team
                </NavLink>
                <NavLink to="/Blog" className="dropdown-item text-dark btn1">
                  Blog
                </NavLink>
              </div>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/Contact" exact>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="cart-contents nav-link" to="#" title="View your shopping cart">
              <span class="cart-contents-count"><i className="mx-2 fa fa-shopping-cart"></i>
                0 items </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-2">
        <div className="header-btn d-xl-block">
            <NavLink  to="/Login" className="my-account-btn" exact>
            <img src="./images/user.png" alt="My account" />
             My Account </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
