import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const ModalForm = () => {
  const [uploadImages, setUploadImages] = useState("");
  const [downloadImages, setDownloadImages] = useState("");
  const { actions } = useContext(Context);

  return (
    <div className=" container text-center mt-5">
      <button
        type="button"
        className="btn btnHeader"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Enviar Presupuesto
      </button>
      <div
        className="modal fade modal-dialog-scrollable"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                mensaje nuevo
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
                    Destinatario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Tiempo estimado
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control input-foto"
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
                className="btn btnHeader"
                data-bs-dismiss="modal"
                onClick={(e) => actions.uploadFile(uploadImages)}
              >
                Cargar archivo
              </button>
              <button type="button" className="btn btnHeader">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
