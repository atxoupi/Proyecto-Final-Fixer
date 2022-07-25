import React from "react";

export const SentBudgets = () => {
  return (
    <>
      <div class="row d-flex justify-content-evenly">
        <img src="..." class="col-3 rounded float-start " alt="..." />
        <div className="col-3 text-center">
          <div className="price-budget-title">Presupuesto</div>
          <div className="price-budget">20 €</div>
          <button>Descargar presupuesto</button>
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
