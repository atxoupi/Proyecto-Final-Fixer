import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import bombilla from "../../img/icons/bombilla.png";
import houseIcon from "../../img/icons/hogar.png";
import aire from "../../img/icons/aire-acondicionado.png";
import grifo from "../../img/icons/grifo-de-agua.png";
import rodillo from "../../img/icons/rodillo.png";
import aserradura from "../../img/icons/aserradura.png";
import cascoAlbañil from "../../img/icons/casco-de-seguridad.png";
import camion from "../../img/icons/camion.png";
import regadera from "../../img/icons/jardineria.png";

export const WorkPost = ({
  description,
  location,
  title,
  sector,
  work_id,
  showButton,
}) => {
  const { actions } = useContext(Context);

  const showIcons = () => {
    if (sector === "Fontanería") {
      return grifo;
    } else if (sector === "Climatización") {
      return aire;
    } else if (sector === "Pintura") {
      return rodillo;
    } else if (sector === "Carpintería") {
      return aserradura;
    } else if (sector === "Albañilería") {
      return cascoAlbañil;
    } else if (sector === "Electricidad") {
      return bombilla;
    } else if (sector === "Mudanzas") {
      return camion;
    } else {
      return regadera;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div className="post-box">
            <div className="post-card">
              <div className="row">
                <div className="work-header d-flex justify-content-between">
                  <h3 className="work-title text-center mb-3">{title}</h3>
                  <img
                    className="sector-icon"
                    src={showIcons()}
                    style={{ width: "50px" }}
                  ></img>
                </div>
              </div>

              <div className="work-description mb-3">
                Descripción:{description}
              </div>
              <div className="work-location">
                <img className="sector-icon me-2" src={houseIcon}></img>
                <span className="location-span">{location}</span>
              </div>

              <div>
                {showButton ? (
                  <div className="d-flex justify-content-center">
                    <Link to={`/work/${work_id}/budgets`}>
                      <button type="button" className="btn btnHeader mt-2 ">
                        Ver presupuesto
                      </button>
                      <button
                        type="button"
                        onClick={() => actions.deleteWork(work_id)}
                      >
                        Borrar oferta
                      </button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
