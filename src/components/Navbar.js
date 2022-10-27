import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
     
      <Link className="navbar-brand logo-image" to="/">
        <img src="assets/images/logo.png" alt="alternative" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-awesome fas fa-bars" />
        <span className="navbar-toggler-awesome fas fa-times" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#register">
              REGISTER <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#description">
              DETAILS
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle page-scroll"
              href="#date"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              DATE
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/article">
                <span className="item-text">ARTICLE DETAILS</span>
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/terms">
                <span className="item-text">TERMS CONDITIONS</span>
              </Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/privacy">
                <span className="item-text">PRIVACY POLICY</span>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
        <span className="nav-item social-icons">
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-facebook-f fa-stack-1x" />
            </a>
          </span>
          <span className="fa-stack">
            <a href="#your-link">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fab fa-twitter fa-stack-1x" />
            </a>
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
