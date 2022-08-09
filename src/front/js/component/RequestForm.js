import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const RequestForm = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const regions = store.regions;
  const [city, setCity] = useState("");
  const [sector, setSector] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    if (city !== "" && sector !== "" && description !== "" && title !== "") {
      actions.createRequest(city, sector, description, title);
      Swal.fire({
        toast: true,
        color: "003566",
        icon: "success",
        position: "top-end",
        animation: true,
        title: "Oferta creada satisfactoriamente",
        showConfirmButton: false,
        timer: 4000,
      });
      navigate("/works");
    } else {
      Swal.fire({
        toast: true,
        color: "003566",
        icon: "warning",
        position: "top-end",
        animation: true,
        title: "Rellena todos los campos",
        showConfirmButton: false,
        timer: 4000,
      });
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
                <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                  Para crear una solicitud de trabajo, llene los siguientes
                  campos:
                </h4>
                <form onSubmit={handleSubmitRequest}>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      {/* <label className="form-label select-label">
                        Selecciona una provincia
                      </label> */}

                      <select
                        className="select w-100 form-control-request form-select form-control-lg text-muted"
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option defaultValue>Provincia</option>
                        {regions.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-md-6 mb-4 pb-2">
                      {/* <label className="form-label select-label">
                        ¿Que tipo de trabajo buscar?
                      </label> */}
                      <select
                        className="select  w-100 form-control-request  form-select form-control-lg text-muted"
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <option defaultValue>Sector</option>
                        <option value="Fontanería">Fontanería</option>
                        <option value="Carpintería">Carpintería</option>
                        <option value="Pintura">Pintura</option>
                        <option value="Electricidad">Electricidad</option>
                        <option value="Albañilería">Albañilería</option>
                        <option value="Climatización">Climatización</option>
                        <option value="Mudanzas">Mudanzas</option>
                        <option value="Jardinería">Jardinería</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4 pb-2 ">
                      <textarea
                        className="form-control form form-control-request"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        aria-label="Título del trabajo"
                        placeholder="Describe brevemente el trabajo que necesitas "
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 ">
                      <textarea
                        className="form-control form form-control-request"
                        style={{ height: "8rem" }}
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        aria-label="Descripción del trabajo"
                        placeholder="Por favor, facilita al trabajador más detalles de tu oferta: dimensiones, plazo,..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-4 pt-2">
                    <input
                      className="btn btn-lg mail-button"
                      type="submit"
                      value="Subir proyecto"
                      id="submitButtonRequest"
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
