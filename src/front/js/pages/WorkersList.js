import React, { useEffect, useState, useContext } from "react";
import { CardWorker } from "../component/cardWorker";
import { Context } from "../store/appContext";

export const WorkersList = () => {
  const { store, actions } = useContext(Context);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    actions.listWorkers();
  }, []);

  const workers = store.workers;
  console.log(workers);

  // const showFilteredItems = (par) => {
  //   const filteredWorkers = workers.filter((item) => item.sector === par);
  //   console.log(filteredWorkers);
  // };

  return (
    <>
      <div className="title-workersList text-center my-5">
        <h4>Selecciona un sector y una ciudad para tu búsqueda</h4>
      </div>
      <div className="input-group my-3 mx-auto w-50 ">
        <select
          className="form-select"
          id="inputGroupSelect02"
          // onChange={(e) => {
          //   showFilteredItems(e.target.value);
          // }}
        >
          <option defaultValue>Elige un sector...</option>
          {workers.map((item, index) => (
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
      <div>
        <ul className="card-grid">
          {workers.map((item, index) => (
            <li key={index}>
              <CardWorker name={item.name} sector={item.sector} />
            </li>
          ))}
          {/* {showFilteredItems(workers)} */}
        </ul>
      </div>
    </>
  );
};
