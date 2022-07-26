import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ModalForm from "./modalForm";
import VerPresupuesto from "./verPresupuesto";

export const WorkPost = ({
  description,
  location,
  worker_id,
  user_id,
  url,
}) => {
  const { store, actions } = useContext(Context);
  // console.log(url);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-card">
              <div className="work-title"> Título: {title}</div>
              <div className="work-location"> Ubicación:{location} </div>
              <div className="work-description">Descripción:{description}</div>
              {store.usuario ? (
                <VerPresupuesto url={url} />
              ) : (
                <ModalForm id={worker_id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
