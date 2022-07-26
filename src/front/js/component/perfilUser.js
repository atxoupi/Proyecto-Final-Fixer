import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import PropTypes from "prop-types";

const PerfilUser = () => {
  const { store, actions } = useContext(Context);

  //DATOS A EDITAR DE USUARIO
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [adress, setAdress] = useState("");
  const [tlf, setTlf] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [editUser, seteditUser] = useState("");

  //Funcion
  const handleSubmitEditUser = (e) => {
    e.preventDefault();
    if (
      username !== "" &&
      lastname !== "" &&
      email !== "" &&
      city !== "" &&
      postCode !== "" &&
      adress === "" &&
      tlf === "" &&
      password2 !== "" &&
      password1 === password2
    ) {
      actions.userEdit(
        username,
        lastname,
        email,
        city,
        adress,
        postCode,
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
  //   console.log(user);
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
                // defaultValue={user.user.name}
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
                // defaultValue={user.user.lastname}
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
                // defaultValue={user.user.city}
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
                Codigo Postal:
              </label>
            </div>
            <div className="col-auto">
              <input
                disabled
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                // defaultValue={user.user.postCode}
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
                // defaultValue={user.user.email}
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
                // defaultValue={user.user.tlf_number}
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
                      //   onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Apellidos:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Ciudad:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Dirección:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Codigo Postal:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
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
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Password 1:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Password 2:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btnHeader">
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

// PerfilUser.propTypes = {
//   user: PropTypes.any,
// };
