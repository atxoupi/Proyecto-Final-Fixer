import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

const PerfilWorker = () => {
  const { store, actions } = useContext(Context);

  //DATOS A EDITAR DE USUARIO TRABAJADOR
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [adress, setAdress] = useState("");
  const [tlf, setTlf] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // console.log(store.editWorkerGet);
  //Funcion
  const handleSubmitEditWorker = (e) => {
    // e.preventDefault();
    if (
      username !== "" &&
      email !== "" &&
      city !== "" &&
      sector !== "" &&
      adress === "" &&
      tlf === "" &&
      password1 !== "" &&
      password2 === password1
    ) {
      actions.editWorkerGet(
        username,
        email,
        city,
        sector,
        adress,
        tlf,
        password1
      );
    } else if (
      password1 !== "" &&
      password2 !== "" &&
      password1 !== password2
    ) {
      console.log("Tus contraseñas no coinciden");
    }
  };
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
                for="inputPassword6"
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
                defaultValue={store.editWorkerGet.name}
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                for="inputPassword6"
                className="col-form-label fw-bold mt-2"
              >
                email:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                defaultValue={store.editWorkerGet.email}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                for="inputPassword6"
                className="col-form-label fw-bold mt-2"
              >
                Ciudad:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                defaultValue={store.editWorkerGet.city}
              />
            </div>
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                for="inputPassword6"
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
                aria-describedby="passwordHelpInline"
                defaultValue={store.editWorkerGet.sector}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                for="inputPassword6"
                className="col-form-label fw-bold mt-2"
              >
                Direccion:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                defaultValue={store.editWorkerGet.adress}
                // placeholder={user.user.adress}
                // aria-label={user.user.adress}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                for="inputPassword6"
                className="col-form-label fw-bold mt-2"
              >
                Numero de contacto:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                defaultValue={store.editWorkerGet.tlf}
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
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
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
                    <label for="recipient-name" className="col-form-label">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.name}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      ciudad:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      sector:
                    </label>
                    <select
                      className="form-control"
                      defaultValue={store.editWorkerGet.sector}
                      onChange={(e) => setSector(e.target.value)}
                    >
                      <option value="1">Elije una opción</option>
                      <option value="Fontanería">Fontanería</option>
                      <option value="Carpintería">Carpintería</option>
                      <option value="Pintura">Pintura</option>
                      <option value="Electricidad">Electricidad</option>
                      <option value="Climatización">Climatización</option>
                      <option value="Mudanzas">Mudanzas</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Dirección:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.adress}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Numero de contacto:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.tlf}
                      onChange={(e) => setTlf(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Password:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.password1}
                      onChange={(e) => setPassword1(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Repite el password:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.editWorkerGet.password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btnHeader"
                  onClick={() =>
                    actions.editWorkerProfile(
                      username,
                      email,
                      city,
                      sector,
                      adress,
                      tlf,
                      password1
                    )
                  }
                >
                  aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilWorker;

// PerfilWorker.propTypes = {
//   user: PropTypes.any,
// };
