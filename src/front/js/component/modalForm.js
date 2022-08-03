import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const ModalForm = ({ id }) => {
  const [uploadImages, setUploadImages] = useState("");
  const [precio, setPrecio] = useState("");
  const [duracion, setDuracion] = useState("");
  const { actions } = useContext(Context);

  return (
    <div className=" container text-center mt-2">
      <button
        type="button"
        className="btn mail-button"
        data-bs-toggle="modal"
        data-bs-target={"#exampleModal" + id}
        data-bs-whatever="@mdo"
        data-backdrop="false"
      >
        Enviar Presupuesto
      </button>
      <div
        className="modal fade modal-dialog-scrollable"
        id={"exampleModal" + id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Mensaje Nuevo
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
                    Precio
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-request"
                    id="recipient-name"
                    onChange={(e) => {
                      setPrecio(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Tiempo estimado
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-request "
                    id="recipient-name"
                    onChange={(e) => {
                      setDuracion(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control form-control-request input-foto"
                    type="file"
                    id="formFile"
                    onChange={(e) => setUploadImages(e.target.files[0])}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn mail-button"
                data-bs-dismiss="modal"
                onClick={(e) =>
                  actions.uploadFile(uploadImages, id, precio, duracion)
                }
              >
                Cargar archivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
