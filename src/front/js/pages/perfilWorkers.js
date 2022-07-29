import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PerfilWorker from "../component/perfilWorker";

export const PerfilWorkers = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.consultWorkerProfile();
  }, []);

  return (
    <div className="container">
      <PerfilWorker />
    </div>
  );
};
