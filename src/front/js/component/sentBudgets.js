import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { StarsContainer } from "./starsContainer";
import obrero from "../../img/icons/obrero.png";
import download from "../../img/icons/downloads.png";
import { Link } from "react-router-dom";

export const SentBudgets = ({
  worker_id,
  work_id,
  url,
  duration,
  price,
  id,
  picture,
}) => {
  const { store, actions } = useContext(Context);

  //Traemos los datos del trabajador para obtener la foto de perfil
  useEffect(() => {
    actions.getworker(worker_id);
  }, []);
  console.log(store.workerprofile);
  return (
    <>
      <div className="d-flex justify-content-between p-2  border-bottom border-warning">
        <Link to={`/workerprofile/${worker_id}`}>
          <div className="col-lg-2 img-profile-container">
            <img
              src={picture === null ? obrero : picture}
              className="card-img-top mx-auto mt-2 rounded-circle"
              alt="imagen trabajador"
              style={{
                objectFit: "cover",
                width: "100px",
                height: "100px",
              }}
            />
          </div>
        </Link>
        <div className="body-budget col-4">
          <div className="h-30 mt-2  d-flex justify-content-between">
            <div className="col-lg-4 text-center ">
              <div className="price-budget-title fw-bold border-bottom border-warning">
                Duración
              </div>
              <div className="price-budget"> {duration} </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="price-budget-title fw-bold border-bottom border-warning">
                Presupuesto
              </div>
              <div className="price-budget"> {price} € </div>
            </div>
          </div>
        </div>

        {store.viewRatings === true ? (
          <div className="col-3">
            <StarsContainer work_id={work_id} worker_id={worker_id} />
          </div>
        ) : (
          <>
            <div className="text-center gy-4">
              <button
                className="mail-button mb-3 ms-2"
                type="button"
                onClick={() => {
                  actions.aceptBudget(id);
                }}
              >
                <i className="far fa-check-circle"></i>
              </button>
              <button
                className="reject-button ms-2"
                type="button"
                onClick={() => actions.rejectBudget(id)}
              >
                <i className="far fa-times-circle"></i>
              </button>

              <a href={url} download target="_blank" rel="noopener noreferrer">
                <button type="button" className=" mail-button ms-2">
                  <img src={download} style={{ width: "16px" }}></img>
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};
