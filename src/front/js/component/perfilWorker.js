import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

const PerfilWorker = () => {
  const { store, actions } = useContext(Context);
  const regions = store.regions;

  //DATOS A EDITAR DE USUARIO TRABAJADOR
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [adress, setAdress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [tlf, setTlf] = useState("");

  console.log("username " + username);
  console.log(store.editWorkerGet);
  //Funcion
  const handleSubmitEditWorker = (e) => {
    // e.preventDefault();

    actions.editWorkerProfile(
      username,
      email,
      city,
      sector,
      adress,
      tlf,
      postcode
    );
  };
  useEffect(() => {
    setUsername(store.editWorkerGet.name);
    setEmail(store.editWorkerGet.email);
    setCity(store.editWorkerGet.city);
    setSector(store.editWorkerGet.sector);
    setAdress(store.editWorkerGet.adress);
    setPostcode(store.editWorkerGet.postcode);
    setTlf(store.editWorkerGet.tlf);
  }, [store.editWorkerGet]);

  return (
    <div id="perfil1" className="border border-warning border-2 rounded-3 mt-5">
      <div className="container p-3 text-center">
        <div className="ms-4" style={{ width: "50 rem" }}>
          <img
            src="https://picsum.photos/seed/picsum/100/100"
            className="rounded-3"
            alt="..."
          />
        </div>
        <div
          className="container mt-2 ms-1 fw-bold
        "
        >
          Hola,
        </div>
      </div>

      <p className="mt-3 ms-4 fw-bold text-decoration-underline">
        Datos de la empresa:
      </p>

      <div>
        <ul>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="recipient-name"
                className="col-form-label fw-bold mt-2"
              >
                Nombres:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="basic-addon1"
                className="form-control"
                // defaultValue={store.editWorkerGet.name}
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label fw-bold mt-2">email:</label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                defaultValue={store.editWorkerGet.email}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label fw-bold mt-2">Ciudad:</label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                defaultValue={store.editWorkerGet.city}
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="inputPassword6"
                className="col-form-label fw-bold mt-2"
              >
                Sector:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                defaultValue={store.editWorkerGet.sector}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label fw-bold mt-2">Direccion:</label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                defaultValue={store.editWorkerGet.adress}
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label fw-bold mt-2">
                Codigo Postal:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                defaultValue={store.editWorkerGet.postcode}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label className="col-form-label fw-bold mt-2">
                Numero de contacto:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                defaultValue={store.editWorkerGet.tlf_number}
              />
            </div>
          </div>
        </ul>
      </div>
      <div className=" container ms-3 mt-4 mb-2">
        <button
          type="button"
          className="btn btnHeader"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Editar datos
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          {/* //MODAL */}
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Mis datos
                </h5>
                <button
                  type="button"
                  className="btn-close btnHeader"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={username ? username : ""}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="col-form-label">email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={email ? email : ""}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">ciudad:</label>
                    <select
                      className="select w-100 form-control-request form-control-lg"
                      onChange={(e) => setCity(e.target.value)}
                      required
                    >
                      <option value="1">
                        {store.editWorkerGet.city
                          ? store.editWorkerGet.city
                          : "Provincia"}
                      </option>
                      {regions.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">sector:</label>
                    <select
                      className="form-control"
                      defaultValue={store.editWorkerGet.sector || ""}
                      onChange={(e) => setSector(e.target.value)}
                    >
                      <option value="1">
                        {store.editWorkerGet.sector
                          ? store.editWorkerGet.sector
                          : "Elije una opción"}
                      </option>
                      <option value="Fontanería">Fontanería</option>
                      <option value="Carpintería">Carpintería</option>
                      <option value="Pintura">Pintura</option>
                      <option value="Electricidad">Electricidad</option>
                      <option value="Climatización">Climatización</option>
                      <option value="Mudanzas">Mudanzas</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Dirección:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={adress ? adress : ""}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="col-form-label">
                      Numero de contacto:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={tlf ? tlf : ""}
                      onChange={(e) => setTlf(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Codigo Postal:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={postcode ? postcode : ""}
                      onChange={(e) => setPostcode(e.target.value)}
                    />
                  </div>
                </form>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btnHeader"
                    data-bs-dismiss="modal"
                    onClick={handleSubmitEditWorker}
                  >
                    aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilWorker;
