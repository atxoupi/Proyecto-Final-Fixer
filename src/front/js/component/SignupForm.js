import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

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
      alert("Your user has been succesfully");
    } else {
      alert("Rellena todos los campos");
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
      actions.createWorker(username, lastname, city, email, password1); //puedo poner username tambien?
      alert("Your user has been succesfully");
    } else {
      alert("Rellena todos los campos");
    }
  };

  return (
    <>
      {/* Nav bar con botones usuario/profesional */}
      <ul
        className="nav nav-pills mb-3 mt-3 d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
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
            className="nav-link"
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
                  className="card shadow-2-strong card-registration"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                      Para registrarte, rellena los siguientes campos
                    </h3>
                    <form onSubmit={handleSubmitUser}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-lg"
                              placeholder="Nombre"
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control form-control-lg"
                              placeholder="Apellidos"
                              onChange={(e) => setLastname(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress2"
                              className="form-control form-control-lg"
                              placeholder="email@email.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="examplePassword1"
                              className="form-control form-control-lg"
                              placeholder="password"
                              onChange={(e) => setPassword1(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="examplePassword2"
                              className="form-control form-control-lg"
                              placeholder="Repite el  password"
                              onChange={(e) => setPassword2(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          required ="required"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                          
                        >
                          He leído y acepto la política de privacidad bla
                          blablbalblalba
                        </label>
                      </div>

                      <div className="mt-4 pt-2">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="Registrarme"
                          id="submitButton1"
                        />
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        ¿Ya tienes una cuenta creada?
                        <Link to="/login" className="fw-bold text-body">
                          <u>Entra aquí</u>
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
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                      Para registrarte, rellena los siguientes campos
                    </h3>
                    <form onSubmit={handleSubmitWorker}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName2"
                              className="form-control form-control-lg"
                              placeholder="Nombre"
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName2"
                              className="form-control form-control-lg"
                              placeholder="Apellidos"
                              onChange={(e) => setLastname(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="city"
                              className="form-control form-control-lg"
                              placeholder="Ciudad o población"
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select className="select form-control-lg">
                            <option value="1" disabled>
                              Elije una opción
                            </option>
                            <option value="2">Fontanería</option>
                            <option value="3">Carpintería</option>
                            <option value="4">Pintura</option>
                            <option value="4">Electricidad</option>
                            <option value="4">Climatización</option>
                            <option value="4">Mudanzas</option>
                          </select>
                          <label className="form-label select-label">
                            Selecciona tu sector
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress1"
                              className="form-control form-control-lg"
                              placeholder="email@email.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="examplePassword3"
                              className="form-control form-control-lg"
                              placeholder="password"
                              onChange={(e) => setPassword1(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="examplePassword4"
                              className="form-control form-control-lg"
                              placeholder="Repite el password"
                              onChange={(e) => setPassword2(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck2"
                          required ="required"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck2"
                        >
                          He leído y acepto la política de privacidad bla
                          blablbalblalba
                        </label>
                      </div>

                      <div className="mt-4 pt-2">
                        <input
                          className="btn btn-primary btn-lg "
                          type="submit"
                          value="Registrarme"
                          id="submitButton2"
                        />
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        ¿Ya tienes una cuenta creada?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Entra aquí</u>
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
    </>
  );
};
