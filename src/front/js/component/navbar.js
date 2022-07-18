import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoFixer from "../../img/logo-fixer.png";
import "../../styles/index.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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
            {store.auth === false ? (
              <Link className="nav-link_navbar " href="#" to="/request">
                Publica una oferta
              </Link>
            ) : null}
          </li>
          <li className="nav-item mx-1">
            {store.auth === false ? (
              <Link to="/signup" className="nav-link_navbar w-100" href="#">
                Regístrate
              </Link>
            ) : null}
          </li>
          <li className="nav-item mx-1">
            {store.auth === false ? (
              <Link className="nav-link_navbar" aria-current="page" to="/login">
                Accede
              </Link>
            ) : null}
          </li>
          <li className="nav-item mx-1">
            <Link to="/login">
              {store.auth === true ? (
                <spam onClick={() => actions.logout()}>
                  <Link
                    to="/login"
                    className="nav-link_navbar"
                    aria-current="page"
                  >
                    Logout
                  </Link>
                </spam>
              ) : null}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
