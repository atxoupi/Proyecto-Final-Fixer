import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoFixer from "../../img/logo-fixer.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg fs-6">
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand">
          <img
            src={logoFixer}
            style={{ maxHeight: "4rem" }}
            alt="logo-fixer"
          ></img>
        </Link>
        <button
          className="navbar-toggler navbar-collapse-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <i className="fas fa-bars"></i>
          </span>
        </button>
      </div>
      <div
        className="collapse navbar-collapse navbar-collapse-width"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mb-2 mb-lg-0">
          {store.usuario ? (
            <li className="nav-item mx-1">
              <Link
                className="nav-link nav-link-navbar "
                href="#"
                to="/request"
              >
                <strong>Publica una oferta</strong>
              </Link>
            </li>
          ) : (
            ""
          )}

          {store.usuario ? (
            <li className="nav-item mx-1">
              <Link className="nav-link nav-link-navbar " href="#" to="/works">
                <strong>Mis ofertas</strong>
              </Link>
            </li>
          ) : (
            ""
          )}

          {!store.usuario && store.auth == true ? (
            <li className="nav-item mx-1">
              <Link className="nav-link nav-link-navbar" href="#" to="/works">
                <strong>Ofertas publicadas</strong>
              </Link>
            </li>
          ) : (
            ""
          )}
          {store.usuario ? (
            <li className="nav-item mx-1">
              <Link
                className="nav-link nav-link-navbar"
                href="#"
                to="/workers-list"
              >
                <i className="fas fa-search"></i>
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className="nav-item mx-1">
            {store.auth === false ? (
              <Link
                to="/signup"
                className="nav-link nav-link-navbar w-100"
                href="#"
              >
                <strong>Regístrate</strong>
              </Link>
            ) : null}
          </li>
          {store.usuario ? (
            <li className="nav-item mx-1">
              <Link
                className="nav-link nav-link-navbar"
                href="#"
                to="/perfil-user"
              >
                <i className="fas fa-user"></i>
              </Link>
            </li>
          ) : (
            ""
          )}

          {!store.usuario && store.auth == true ? (
            <li className="nav-item mx-1">
              <Link
                className="nav-link nav-link-navbar"
                href="#"
                to="/perfil-worker"
              >
                <i className="fas fa-address-card"></i>
              </Link>
            </li>
          ) : (
            ""
          )}
          <li className="nav-item mx-1">
            {store.auth === false ? (
              <Link
                className="nav-link nav-link-navbar"
                aria-current="page"
                to="/login"
              >
                <strong>Accede</strong>
              </Link>
            ) : null}
          </li>

          <li className="nav-item mx-1">
            {store.auth === true ? (
              <span onClick={() => actions.logout()}>
                <Link
                  className="nav-link nav-link-navbar"
                  aria-current="page"
                  to="/login"
                >
                  <i className="fas fa-sign-out-alt"></i>
                </Link>
              </span>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};
