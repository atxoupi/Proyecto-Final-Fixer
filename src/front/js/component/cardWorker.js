import React, { useContext } from "react";
import { Context } from "../store/appContext";
import obrero from "../../img/icons/obrero.png";

export const CardWorker = ({ name, sector, image }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        {image === null ? (
          <img
            src={obrero}
            className="card-img-top mx-auto mt-2"
            alt="imagen obrero"
            style={{ width: "200px" }}
          />
        ) : (
          <img src={image} className="card-img-top" alt="imagen " />
        )}

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{sector}</p>
          <button>
            <a href="#" className="btn btn-primary">
              Leer más
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
