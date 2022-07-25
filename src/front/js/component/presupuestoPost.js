import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import VerPresupuesto from "./verPresupuesto";

export const WorkPost = ({ description, location, worker_id, user_id }) => {
  const { store, actions } = useContext(Context);
  // console.log(url);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-card">
              <div className="work-title"> Título</div>
              <div className="work-location"> Ubicación:{location} </div>
              <div className="work-description">Descripción:{description}</div>
              {/* {!store.usuario ? (
                <VerPresupuesto />
              ) : (
                <button>Ver presupuesto</button>
              )} */}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
