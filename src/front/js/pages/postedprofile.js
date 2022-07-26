import React, { useEffect, useContext } from "react";
import { Workerprofile } from "../component/workerprofile";
import { Context } from "../store/appContext";

export const Postedprofile = (email) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.GetWorkerProfile(email);
  }, []);
  let workerp = store.workerProfile;
  return (
    <>
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3">
          Estas són las ofertas disponibles de tu sector
        </h3>
        <Workerprofile
          name={workerp.name}
          email={workerp.email}
          city={workerp.city}
          tlf_number={workerp.tlf_number}
          sector={workerp.sector}
          pictures={workerp.pictures}
        />
      </div>
    </>
  );
};
