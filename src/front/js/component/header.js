import React from "react";
// import "../../img/set-of-tools-with-copy-space.jpg"
import imagenHeader from "../../img/set-of-tools-with-copy-space.jpg";
import checked from "../../img/cheque.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header-title text-center my-3">
        <h1> ¿Qué necesitas ? </h1>
      </div>
      <div className="container-fluid d-flex justify-content-center mb-3 px-4">
        <div className="row d-flex justify-content-between">
          <div className="col-5">
            <Link
              to="workers-list"
              type="button"
              className="btn btnHeader mt-2"
            >
              Busca un profesional
            </Link>
          </div>
          <div className="col-5">
            <Link to="/request" type="button" className="btn btnHeader mt-2">
              Publica un anuncio
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container wraper-header position-relative"
        style={{
          height: "450",
          width: "100%",
        }}
      >
        <div className="check_container_header d-flex flex-column w-50 position-absolute me-60 p-3 ">
          <div className="d-inline">
            <img
              className="checkedIcon"
              style={{
                width: "15px",
              }}
              src={checked}
            ></img>
            <span className="checkbox-inline ms-2">
              Encuentra el mejor profesional cerca de ti
            </span>
          </div>
          <div className="d-inline">
            <img
              className="checkedIcon"
              style={{
                width: "15px",
              }}
              src={checked}
            ></img>
            <span className="checkbox-inline ms-2">
              Más de un millón de usuarios satisfechos
            </span>
          </div>
          <div className="d-inline">
            <img
              className="checkedIcon"
              style={{
                width: "15px",
              }}
              src={checked}
            ></img>
            <span className="checkbox-inline ms-2">
              Con garantía de calidad
            </span>
          </div>
          <div className="d-inline">
            <img
              className="checkedIcon"
              style={{
                width: "15px",
              }}
              src={checked}
            ></img>
            <span className="checkbox-inline ms-2">
              Tú mandas, propón tu proyecto y los profesionales te contactaran
            </span>
          </div>
        </div>
        <img
          src={imagenHeader}
          className="img-fluid d-flex justify-content-center"
          alt="..."
          style={{
            objectFit: "cover",
            maxHeight: "400px",
            width: "800px",
          }}
        ></img>
      </div>
    </>
  );
};
