import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoFixer from "../../img/logo-fixer.png";
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
                Publica una oferta
              </Link>
            </li>
          ) : (
            ""
          )}

          {store.usuario ? (
            <li className="nav-item mx-1">
              <Link className="nav-link nav-link-navbar " href="#" to="/works">
                Mis ofertas
              </Link>
            </li>
          ) : (
            ""
          )}

          {!store.usuario && store.auth == true ? (
            <li className="nav-item mx-1">
              <Link className="nav-link nav-link-navbar" href="#" to="/works">
                Ofertas publicadas
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
                Buscar profesionales
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
                Regístrate
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
                mi perfil
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
                Mi Perfil
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
                Accede
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
                  Cerrar sesión
                </Link>
              </span>
            ) : null}
          </li>
        </ul>
      </div>
    </nav>
  );
};
