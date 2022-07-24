import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const CardWorker = ({ name, sector }) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{sector}</p>
          <a href="#" className="btn btn-primary">
            Leer más
          </a>
        </div>
      </div>
    </>
  );
};
