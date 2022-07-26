import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Workerprofile = ({
  name,
  email,
  city,
  tlf_number,
  sector,
  pictures,
}) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-photo">
              <img src={pictures}></img>
            </div>
            <div className="post-card">
              <div className="worker-name"> Nombre: {name}</div>
              <div className="worker-email"> Email: {email} </div>
              <div className="worker-city">Ciudad :{city}</div>
              <div className="worker-sector"> Sector: {sector}</div>
              <div className="worker-tlf"> Número Tlf: {tlf_numberl} </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
