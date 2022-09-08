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
              <Link className="nav-link nav-link-navbar " to="/request">
                <strong>Nueva oferta </strong>
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
            <li className="nav-item dropdown mx-1">
              <a
                className="nav-link nav-link-navbar dropdown dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    to="/perfil-user"
                    className="dropdown-item nav-link-navbar my-1 mx-1"
                  >
                    <strong>Mi perfil</strong>
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item nav-link-navbar my-1 mx-1"
                    to="/works"
                  >
                    <strong>Mis ofertas</strong>
                  </Link>
                </li>

                <li>
                  {store.auth === true ? (
                    <span onClick={() => actions.logout()}>
                      <Link
                        className="dropdown-item nav-link-navbar my-1 mx-1"
                        aria-current="page"
                        to="/login"
                      >
                        <strong> Cerrar sesión</strong>
                      </Link>
                    </span>
                  ) : null}
                </li>
              </ul>
            </li>
          ) : (
            ""
          )}

          {!store.usuario && store.auth == true ? (
            <>
              <li className="nav-item mx-1">
                <Link
                  className="nav-link nav-link-navbar"
                  href="#"
                  to="/perfil-worker"
                >
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <span onClick={() => actions.logout()}>
                  <Link
                    className="nav-link nav-link-navbar"
                    aria-current="page"
                    to="/login"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </Link>
                </span>
              </li>
            </>
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
        </ul>
      </div>
    </nav>
  );
};
