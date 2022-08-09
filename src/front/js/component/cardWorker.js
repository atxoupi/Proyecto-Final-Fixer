import React, { useContext } from "react";
import { Context } from "../store/appContext";
import obrero from "../../img/icons/obrero.png";
import { Link } from "react-router-dom";

export const CardWorker = ({ name, sector, image, id }) => {
  return (
    <>
      <div
        className="card border-warning border-2 rounded-3"
        style={{
          width: "18rem",
        }}
      >
        {image === null ? (
          <img
            src={obrero}
            className="card-img-top mx-auto mt-2"
            alt="imagen obrero"
            style={{
              width: "200px",
            }}
          />
        ) : (
          <img
            src={image}
            className="card-img-top mx-auto mt-2"
            alt="imagen "
            style={{
              width: "200px",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
        )}
        <div className="card-body border-top border-2 border-warning">
          <h5 className="card-title fw-bold"> {name} </h5>{" "}
          <p className="card-text"> {sector} </p>{" "}
          <Link to={`/workerprofile/${id}`} className="btn mail-button">
            Leer más{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
