import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const SentBudgets = ({ url }) => {
  const { store, actions } = useContext(Context);
  const budgets = store.budgets;
  return (
    <>
      <div class="row d-flex justify-content-evenly">
        <img src="..." class="col-3 rounded float-start " alt="..." />
        <div className="col-3 text-center">
          <div className="price-budget-title">Presupuesto</div>
          <div className="price-budget">20 €</div>
          <a href={url} download>
            <button type="button" className="btn btnHeader mt-3">
              Descargar presupuesto
            </button>
          </a>
        </div>
        <div className="col-3 text-center">
          <div className="price-budget-title">Duración</div>
          <div className="price-budget">10 días</div>
        </div>
        <div className="col-3 text-center">
          <button>Aceptar</button>
          <button>Rechazar</button>
        </div>
      </div>
    </>
  );
};
