import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ModalForm from "./modalForm";
import houseIcon from "../../img/icons/hogar.png";

export const WorkPostForWorker = ({
  description,
  location,
  title,
  work_id,
  url,
}) => {
  const { actions } = useContext(Context);

  return (
    <>
      <div className="row mt-3">
        <div className="col-10 col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div className="post-box">
            <div className="post-card">
              <h3 className="work-title text-center mb-3">{title}</h3>
              <div className="work-description mb-3">
                <div className="fw-bold">Descripción:</div>
                <div className="mt-1">{description}</div>
              </div>
              <div className="work-location">
                <img className="sector-icon me-2" src={houseIcon}></img>

                <span className="location-span align-bottom fw-bold">
                  {location}
                </span>
              </div>
              <div className="d-flex justify-content-end">
                <div>
                  <a
                    href={url}
                    download
                    className="btn-enviar-presupuesto mt-2"
                  >
                    <ModalForm id={work_id} />
                  </a>
                </div>
                <div>
                  <button
                    className="mail-button mt-2"
                    onClick={() => actions.deleteWork(work_id)}
                  >
                    Borrar oferta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
