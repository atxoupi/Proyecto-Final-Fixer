import React from "react";


export const SignupForm = () => {
  return (
    <>
      {/* Nav bar con botones usuario/profesional */}
      <ul
        class="nav nav-pills mb-3 mt-3 d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-user"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Usuario
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-worker"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Profesional
          </button>
        </li>
      </ul>

      {/* Formulario de usuario */}

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-user"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
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
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-lg"
                              placeholder="Nombre"
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
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress"
                              className="form-control form-control-lg"
                              placeholder="email@email.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="examplePassword1"
                              className="form-control form-control-lg"
                              placeholder="password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          clasName="form-check-label"
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
                          value="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de trabajador */}
        <div
          class="tab-pane fade"
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
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-lg"
                              placeholder="Nombre"
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
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control form-control-lg"
                              placeholder="Ciudad o población"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                           <label className="form-label select-label">
                            Selecciona tu sector
                          </label> <select className="select form-control-lg" multiple aria-label="multiple select example">
                          
                            <option value="1">Fontanería</option>
                            <option value="2">Mudanzas</option>
                            <option value="3">Carpintería</option>
                            <option value="4">Pintura</option>
                            <option value="4">Electricidad</option>
                            <option value="4">Climatización</option>
                          </select>
                          
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress"
                              className="form-control form-control-lg"
                              placeholder="email@email.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              id="examplePassword1"
                              className="form-control form-control-lg"
                              placeholder="password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="mb-3 form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          clasName="form-check-label"
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
                          value="Submit"
                        />
                      </div>
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
