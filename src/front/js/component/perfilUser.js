import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

const PerfilUser = () => {
  const { store, actions } = useContext(Context);

  //DATOS A EDITAR DE USUARIO
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [tlf, setTlf] = useState("");
  const [adress, setAdress] = useState("");
  const [postcode, setPostCode] = useState("");

  console.log("username " + name);
  console.log(store.consultUser);
  //Funcion
  const handleSubmitEditUser = (e) => {
    actions.editUserProfile(name, lastname, email, city, tlf, adress, postcode);
  };
  useEffect(() => {
    setName(store.consultUser.name);
    setLastname(store.consultUser.lastname);
    setEmail(store.consultUser.email);
    setCity(store.consultUser.city);
    setTlf(store.consultUser.tlf);
    setAdress(store.consultUser.adress);
    setPostCode(store.consultUser.postcode);
  }, [store.consultUser]);
  // console.log(store.consultUser);

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
          Hola, {store.consultUser.name}
        </div>
      </div>
      <div className="container">
        <p className="mt-3 ms-4 fw-bold text-decoration-underline">
          Datos Personales:
        </p>
      </div>

      <div className="container">
        <ul>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="text-start fw-bold">Nombre:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.name}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="fw-bold text-start">Apellido:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.lastname}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="fw-bold text-start">Correo:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.email}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="fw-bold text-start">Ciudad:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.city}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="fw-bold text-start">Direccion:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.adress}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="fw-bold text-start">Codigo Postal:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.postcode}</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row">
              <div className=" col-4">
                <p className="fw-bold text-start">Numero de contacto:</p>{" "}
              </div>
              <div className="col mb-3">
                <p className=" text-start">{store.consultUser.tlf}</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className=" container mb-3">
        <button
          type="button"
          className="d-grid gap-1 col-4 mx-auto btn btnHeader fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Editar datos
        </button>
        {/* MODAL */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content modal-content-user  border-2 border-warning">
              <div className="modal-header border-warning">
                <h5 className="modal-title fw-bold" id="exampleModalLabel">
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
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-request "
                      id="recipient-name"
                      value={name ? name : ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Apellidos:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-request"
                      id="recipient-name"
                      value={lastname ? lastname : ""}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Ciudad:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-request"
                      id="recipient-name"
                      value={city ? city : "No hay datos"}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Dirección:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-request"
                      id="recipient-name"
                      value={adress ? adress : ""}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Codigo Postal:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-request"
                      id="recipient-name"
                      value={postcode ? postcode : ""}
                      onChange={(e) => setPostCode(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label fw-bold"
                    >
                      Numero de contacto:
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-request"
                      id="recipient-name"
                      value={tlf ? tlf : ""}
                      onChange={(e) => setTlf(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer border-warning">
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btnHeader"
                  onClick={handleSubmitEditUser}
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

export default PerfilUser;
