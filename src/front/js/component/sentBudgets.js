import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { StarsContainer } from "./starsContainer";
import obrero from "../../img/icons/obrero.png";

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
        <div className="body-budget col-6">
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
          <a href={url} download target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="btn budgetBtn mail-button mt-4"
              style={{ marginLeft: "5rem" }}
            >
              Descargar presupuesto
            </button>
          </a>
        </div>

        {store.viewRatings === true ? (
          <div className="col-3">
            <StarsContainer work_id={work_id} worker_id={worker_id} />
          </div>
        ) : (
          <>
            {" "}
            <div className="col-3 text-center gy-4">
              <button
                className="mail-button mb-3"
                type="button"
                style={{ width: "102px" }}
                onClick={() => {
                  actions.aceptBudget(id);
                }}
              >
                Aceptar
              </button>
              <button
                className="reject-button"
                type="button"
                onClick={() => actions.rejectBudget(id)}
              >
                Rechazar
              </button>{" "}
            </div>
          </>
        )}
      </div>
    </>
  );
};
