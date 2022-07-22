import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const WorkersList = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.listWorkers();
  }, []);
  console.log(store.workers);
  return (
    <>
      <div className="title-workersList text-center my-5">
        <h4>Selecciona un sector y una ciudad para tu búsqueda</h4>
      </div>
      <div className="input-group my-3 mx-auto w-50 ">
        <select className="form-select" id="inputGroupSelect02">
          <option defaultValue>Elige un sector...</option>
          {store.workers.map((item, index) => (
            <option value={item.sector} key={index}>
              {item.sector}
            </option>
          ))}
        </select>
        <select className="form-select" id="inputGroupSelect02">
          <option defaultValue>Elige una ciudad...</option>
          {store.workers.map((item, index) => (
            <option value={item.city} key={index}>
              {item.city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
