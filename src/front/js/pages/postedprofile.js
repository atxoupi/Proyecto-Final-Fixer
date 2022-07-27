import React, { useEffect, useContext } from "react";
import { Workerprofile } from "../component/workerprofile";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Postedprofile = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3">Perfil de Empresa</h3>
        <Workerprofile />
      </div>
    </>
  );
};
