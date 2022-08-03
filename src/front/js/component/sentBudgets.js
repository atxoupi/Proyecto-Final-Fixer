import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { StarsContainer } from "./starsContainer";

export const SentBudgets = ({
  worker_id,
  work_id,
  url,
  duration,
  price,
  id,
}) => {
  const { actions } = useContext(Context);
  const [ratingOptions, setRatingOptions] = useState(false);

  const viewRatingOption = () => {
    setRatingOptions(true);
  };
  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <img src="..." className="col-3 rounded float-start " alt="..." />
        <div className="col-3 text-center">
          <div className="price-budget-title"> Presupuesto </div>
          <div className="price-budget"> {price} </div>
          <a href={url} download target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn mail-button mt-3">
              Descargar presupuesto
            </button>
          </a>
        </div>
        <div className="col-3 text-center">
          <div className="price-budget-title"> Duración </div>
          <div className="price-budget"> {duration} </div>
        </div>

        <div className="col-3 text-center">
          {ratingOptions === true ? (
            <StarsContainer work_id={work_id} worker_id={worker_id} />
          ) : (
            <>
              <button
                className="mail-button"
                type="button"
                onClick={() => {
                  actions.aceptBudget(id);
                  viewRatingOption();
                }}
              >
                Aceptar
              </button>
              <button
                className="mail-button"
                type="button"
                onClick={() => actions.rejectBudget(id)}
              >
                Rechazar
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
