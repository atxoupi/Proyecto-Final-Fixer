import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Workerprofile = ({ id }) => {
  const { store, actions } = useContext(Context);
  profile = store.workers.filter((worker) => worker.is === id);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-photo">
              <img src={pictures}></img>
            </div>
            <div className="post-card">
              <div className="worker-name"> Nombre: {profile.name}</div>
              <div className="worker-email"> Email: {profile.email} </div>
              <div className="worker-city">Ciudad :{profile.city}</div>
              <div className="worker-sector"> Sector: {profile.sector}</div>
              <div className="worker-tlf">
                {" "}
                Número Tlf: {profile.tlf_numberl}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
