import React from "react";
// import "../../img/set-of-tools-with-copy-space.jpg"
import imagenHeader from "../../img/set-of-tools-with-copy-space.jpg";
import checked from "../../img/cheque.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header-title text-center my-3"></div>

      <div
        className="container wraper-header position-relative"
        style={{
          height: "60%",
          width: "100%",
        }}
      >
        <div
          className="check_container_header_question flex-column position-absolute me-60 p-3"
          style={{ Height: "60%", marginTop: "10px" }}
        >
          <h1> ¿Qué necesitas? </h1>
        </div>
        <div className="check_container_header_buttom flex-column position-absolute me-60">
          <div className="responsive_header d-flex flex-column flex-md-row flex-xl-row flex-lg-row justify-content-between">
            <Link
              to="/workers-list"
              type="button"
              className="btn mail-button m-2 w-50"
            >
              Busca profesional
            </Link>

            <Link
              to="/request"
              type="button"
              className="btn mail-button m-2 w-50"
            >
              Publica un anuncio
            </Link>
          </div>
        </div>
        <div className="check_container_header hidden-xs flex-column w-50 position-absolute me-60 p-3 ">
          <div className="text-container " style={{ Height: "60%" }}>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Encuentra el mejor profesional cerca de ti.
              </span>
            </div>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Más de un millón de usuarios satisfechos.
              </span>
            </div>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Con garantía de calidad.
              </span>
            </div>
            <div>
              <img
                className="checkedIcon"
                style={{
                  width: "15px",
                }}
                src={checked}
              ></img>
              <span className="checkbox-inline ms-2">
                Tú mandas, propón tu proyecto y los profesionales te
                contactaran.
              </span>
            </div>
          </div>
        </div>

        <img
          src={imagenHeader}
          className="img-fluid d-flex justify-content-center rounded-3"
          alt="..."
          style={{
            objectFit: "cover",
            height: "600px",
            width: "100%",
          }}
        ></img>
      </div>
    </>
  );
};
