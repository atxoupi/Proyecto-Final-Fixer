import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const SignupForm = () => {
  const { store, actions } = useContext(Context);

  // Datos usuario
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // Datos trabajador
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      email !== "" &&
      password1 !== "" &&
      password2 !== "" &&
      password1 === password2
    ) {
      actions.createUser(username, lastname, email, password1);
    } else if (
      password1 !== "" &&
      password2 !== "" &&
      password1 !== password2
    ) {
      console.log("Tus contraseñas no coinciden");
    }
  };

  const handleSubmitWorker = (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      email !== "" &&
      password1 !== "" &&
      password2 !== "" &&
      password1 === password2
    ) {
      actions.createWorker(username, city, email, password1, sector);
      alert("Your user has been succesfully");
    } else {
      alert("Rellena todos los campos");
    }
  };

  return (
    <>
      {store.register ? (
        <Navigate to={"/login"} />
      ) : (
        <div>
          <ul
            className="nav nav-pills mb-3 mt-3 d-flex justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active nav-link-signup"
                id="pills-user-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-user"
                type="button"
                role="tab"
                aria-controls="pills-user"
                aria-selected="true"
              >
                Usuario
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link nav-link-signup"
                id="pills-worker-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-worker"
                type="button"
                role="tab"
                aria-controls="pills-worker"
                aria-selected="false"
              >
                Profesional
              </button>
            </li>
          </ul>

          {/* Formulario de usuario */}

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-user"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className=" container h-60">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12 col-lg-9 col-xl-7">
                    <div
                      className=" card-registration"
                      style={{ borderRadius: "15px" }}
                    >
                      <div className="card-body p-3 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                          Para registrarte, rellena los siguientes campos
                        </h3>
                        <form onSubmit={handleSubmitUser}>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="firstName"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="Nombre"
                                  required
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="lastName"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="Apellidos"
                                  onChange={(e) => setLastname(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-3 pb-2">
                              <div className="form-outline">
                                <input
                                  type="email"
                                  id="emailAddress2"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="email@email.com"
                                  required
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-3 pb-2">
                              <div className="form-outline">
                                <input
                                  type="password"
                                  id="examplePassword1"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="Introduce un password entre 8 y 22 caracteres"
                                  required
                                  // pattern="^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,22}$"
                                  onChange={(e) => setPassword1(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-3 pb-2">
                              <div className="form-outline">
                                <input
                                  type="password"
                                  id="examplePassword2"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="Repite el  password"
                                  required
                                  onChange={(e) => setPassword2(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center pt-2">
                            <input
                              className="btn btn-primary btn-lg "
                              type="submit"
                              value="Registrarme"
                              id="submitButton1"
                            />
                          </div>

                          <p className="text-center text-muted mt-3 mb-0">
                            ¿Ya tienes una cuenta creada?
                            <Link to="/login" className="fw-bold text-body">
                              <u> Entra aquí</u>
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de trabajador */}
            <div
              className="tab-pane fade"
              id="pills-worker"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="container h-60">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-12 col-lg-9 col-xl-7">
                    <div
                      className="card shadow-2-strong card-registration"
                      style={{ borderRadius: "15px" }}
                    >
                      <div className="card-body p-3 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                          Para registrarte, rellena los siguientes campos
                        </h3>
                        <form onSubmit={handleSubmitWorker}>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="firstName2"
                                  className="form-control  form-control-signup form-control-lg"
                                  placeholder="Nombre"
                                  onChange={(e) => setUsername(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="lastName2"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="Apellidos"
                                  onChange={(e) => setLastname(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-3">
                              <div className="form-outline">
                                <input
                                  type="text"
                                  id="city"
                                  className="form-control  form-control-signup form-control-lg"
                                  placeholder="Ciudad o población"
                                  onChange={(e) => setCity(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-3 pb-2 ">
                              <select
                                className="select w-100 form-control-signup form-control-lg"
                                onChange={(e) => setSector(e.target.value)}
                              >
                                <option value="1">Elije una opción</option>
                                <option value="Fontanería">Fontanería</option>
                                <option value="Carpintería">Carpintería</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Electricidad">
                                  Electricidad
                                </option>
                                <option value="Climatización">
                                  Climatización
                                </option>
                                <option value="Mudanzas">Mudanzas</option>
                              </select>
                              <label className="form-label select-label">
                                Selecciona tu sector
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-3 pb-2">
                              <div className="form-outline">
                                <input
                                  type="email"
                                  id="emailAddress1"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="email@email.com"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-3 pb-2">
                              <div className="form-outline">
                                <input
                                  type="password"
                                  id="examplePassword3"
                                  className="form-control  form-control-signup form-control-lg"
                                  placeholder="Introduce un password entre 8 y 22 caracteres"
                                  required
                                  // pattern="^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,22}$"
                                  onChange={(e) => setPassword1(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 mb-2 pb-2">
                              <div className="form-outline">
                                <input
                                  type="password"
                                  id="examplePassword4"
                                  className="form-control form-control-signup form-control-lg"
                                  placeholder="Repite el password"
                                  onChange={(e) => setPassword2(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="d-flex justify-content-center pt-2">
                            <input
                              className="btn btn-primary btn-lg "
                              type="submit"
                              value="Registrarme"
                              id="submitButton2"
                            />
                          </div>
                          <p className="text-center text-muted mt-3">
                            ¿Ya tienes una cuenta creada?{" "}
                            <Link to="/login" className="fw-bold text-body">
                              <u> Entra aquí</u>
                            </Link>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
