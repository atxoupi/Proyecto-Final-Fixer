import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const PhotoProfile = () => {
  //   const [photoProfile, setPhotoProfile] = useEffect("");
  const [uploadImages, setUploadImages] = useState("");
  const { actions } = useContext(Context);

  return (
    <>
      <div>
        <button
          type="button"
          className="mail-button fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          data-backdrop="false"
        >
          <i class="fas fa-edit"></i>
        </button>
        <div
          className="modal fade modal-dialog-scrollable"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-backdrop="false"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Editar foto de perfil
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
                    <input
                      className="form-control form form-control-request input-foto"
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
                  className="mail-button fw-bold"
                  data-bs-dismiss="modal"
                  onClick={(e) => actions.pictureProfile(uploadImages)}
                >
                  Cargar archivo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
