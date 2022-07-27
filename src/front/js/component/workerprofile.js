import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Workerprofile = ({ id }) => {
  const { store, actions } = useContext(Context);
  let profile = store.workers.filter((worker) => worker.id === id);
  console.log(typeof id);
  console.log(store.workers);
  console.log(profile[0]);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-photo">
              <img src={profile.pictures}></img>
            </div>
            <div className="post-card">
              <div className="worker-name"> Nombre: {profile[0].name}</div>
              <div className="worker-email"> Email: {profile[0].email} </div>
              <div className="worker-city">Ciudad :{profile[0].city}</div>
              <div className="worker-sector"> Sector: {profile[0].sector}</div>
              <div className="worker-tlf">
                {" "}
                Número Tlf: {profile[0].tlf_numberl}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
