import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { StarsContainer } from "./starsContainer";
import obrero from "../../img/icons/obrero.png";
import download from "../../img/icons/downloads.png";

export const SentBudgets = ({
  worker_id,
  work_id,
  url,
  duration,
  price,
  id,
}) => {
  const { store, actions } = useContext(Context);

  //Traemos los datos del trabajador para obtener la foto de perfil
  useEffect(() => {
    actions.getworker(worker_id);
  }, []);

  return (
    <>
      <div className="row d-flex justify-content-evenly p-2">
        <div
          className="img-profile-container"
          style={{ objectFit: "contain", width: "10rem", height: "10rem" }}
        >
          {" "}
          {store.workerprofile.pictures === null ? (
            <img
              src={obrero}
              className="card-img-top mx-auto mt-2"
              alt="imagen trabajador"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <img
              src={store.workerprofile.pictures}
              className="card-img-top border rounded-3"
              style={{ width: "10rem", height: "10rem", objectFit: "cover" }}
              alt="imagen "
            />
          )}{" "}
        </div>
        <div className="body-budget col-4">
          <div className="h-30 mt-2  d-flex justify-content-evenly">
            <div className="col-3 text-center ">
              <div className="price-budget-title fw-bold border-bottom border-warning">
                {" "}
                Duración{" "}
              </div>
              <div className="price-budget"> {duration} </div>
            </div>
            <div className="col-3 text-center">
              <div className="price-budget-title fw-bold border-bottom border-warning">
                {" "}
                Presupuesto{" "}
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
            <div className="col-4 text-center gy-4">
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
              </button>{" "}
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
