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
  const [postcode, setPostCode] = useState("");
  const [adress, setAdress] = useState("");
  const [tlf, setTlf] = useState("");

  console.log("username " + name);
  console.log(store.consultUser);
  //Funcion
  const handleSubmitEditUser = (e) => {
    // if (password1 !== "" && password2 !== "" && password1 !== password2) {
    //   console.log("Tus contraseñas no coinciden");
    // } else {
    actions.editUserProfile(name, lastname, email, city, adress, postcode, tlf);
  };
  useEffect(() => {
    setName(store.consultUser.name);
    setLastname(store.consultUser.lastname);
    setEmail(store.consultUser.email);
    setAdress(store.consultUser.adress);
    setCity(store.consultUser.city);
    setTlf(store.consultUser.tlf);
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
          Hola,
        </div>
      </div>

      <p className="mt-3 ms-4 fw-bold text-decoration-underline">
        Datos Personales:
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
                defaultValue={store.consultUser.name}
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="recipient-name"
                className="col-form-label fw-bold mt-2"
              >
                Apellidos:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                defaultValue={store.consultUser.lastname}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="recipient-name"
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
                defaultValue={store.consultUser.city}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="inputPassword6"
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
                defaultValue={store.consultUser.adress}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="recipient-name"
                className="col-form-label fw-bold mt-2"
              >
                Codigo Postal:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                className="form-control"
                defaultValue={store.consultUser.postcode}
              />
            </div>
          </div>

          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="recipient-name"
                className="col-form-label fw-bold mt-2"
              >
                email:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                className="form-control"
                defaultValue={store.consultUser.email}
                // defaultValue={user.user.email}
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
                className="form-control"
                defaultValue={store.consultUser.tlf}
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
        {/* MODAL */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
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
                    <label htmlFor="recipient-name" className="col-form-label">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={name ? name : ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Apellidos:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={lastname ? lastname : ""}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Ciudad:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={city ? city : "No hay datos"}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Dirección:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={adress ? adress : "No hay datos"}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Codigo Postal:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={postcode ? postcode : "No hay datos"}
                      onChange={(e) => setPostCode(e.target.value)}
                    />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      email:
                    </label>
                    <input
                      disable
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={store.consultUser.email || ""}
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Numero de contacto:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={tlf ? tlf : "No hay datos"}
                      onChange={(e) => setTlf(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
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
