import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const SentBudgets = ({ url, price, duration }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <img src="..." className="col-3 rounded float-start " alt="..." />
        <div className="col-3 text-center">
          <div className="price-budget-title">Presupuesto</div>
          <div className="price-budget">{price}</div>
          <a href={url} download target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btnHeader mt-3">
              Descargar presupuesto
            </button>
          </a>
        </div>
        <div className="col-3 text-center">
          <div className="price-budget-title">Duración</div>
          <div className="price-budget">{duration}</div>
        </div>
        <div className="col-3 text-center">
          <button>Aceptar</button>
          <button>Rechazar</button>
        </div>
      </div>
    </>
  );
};
