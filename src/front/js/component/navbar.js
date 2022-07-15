import React from "react";
import { Link } from "react-router-dom";
import logoFixer from "../../img/logo-fixer.png";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fs-6">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logoFixer}
            style={{ maxHeight: "4rem" }}
            alt="logo-fixer"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className="collapse  navbar-collapse w-75"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item mx-1">
            <a className="nav-link_navbar " href="#">
              Publica una oferta
            </a>
          </li>
          <li className="nav-item mx-1">
            <Link to="/signup" className="nav-link_navbar w-100" href="#">
              Regístrate
            </Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link_navbar" aria-current="page" to="/login">
              Accede
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
