import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const RequestForm = () => {
  const { store, actions } = useContext(Context);

  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    if (city !== "" && sector !== "" && description !== "") {
      actions.createRequest(city, sector, description);
      alert("Solicitud creada satisfactoriamente");
    } else {
      alert("Rellena todos los campos");
    }
  };

  return (
    <>
      <div className="container h-60 d-flex justify-content-center mt-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                  Para poder subir una solicitud de trabajo debes rellenar los
                  siguientes campos:
                </h3>
                <form onSubmit={handleSubmitRequest}>
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
                      <select
                        className="select form-control-lg"
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
                      <label className="form-label select-label">
                        ¿Que tipo de trabajo estás buscando?
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-group">
                      <span className="input-group-text">
                        Descripción del trabajo
                      </span>
                      <textarea
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                        aria-label="Descripción del trabajo"
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4 pt-2">
                    <input
                      className="btn btn-primary btn-lg "
                      type="submit"
                      value="Subir proyecto"
                      id="submitButton"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
