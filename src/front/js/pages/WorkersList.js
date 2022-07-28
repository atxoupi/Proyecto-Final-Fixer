import React, { useEffect, useState, useContext } from "react";
import { CardWorker } from "../component/cardWorker";
import { Context } from "../store/appContext";

export const WorkersList = () => {
  const { store, actions } = useContext(Context);
  const regions = store.regions;
  useEffect(() => {
    actions.listWorkers();
  }, []);

  useEffect(() => {
    setFilterItems(store.workers);
  }, [store.workers]);
  const [filterItems, setFilterItems] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  useEffect(() => {
    if (selectedCity) {
      const filteredWorkersByCity = store.workers.filter(
        (item) => item.city === selectedCity
      );
      console.log(filteredWorkersByCity);
      setFilterItems(filteredWorkersByCity);
    } else if (selectedSector) {
      console.log(store.workers);
      const filteredWorkersBySector = store.workers.filter(
        (item) => item.sector === selectedSector
      );
      setFilterItems(filteredWorkersBySector);
      console.log(filteredWorkersBySector);
    }
  }, [selectedCity, selectedSector]);

  return (
    <>
      <div className="title-workersList text-center my-5">
        <h4>Selecciona un sector y una ciudad para tu búsqueda</h4>
      </div>
      <div className="input-group my-3 mx-auto w-50 ">
        <select
          className="form-select"
          id="inputGroupSelect02"
          onChange={(e) => {
            setSelectedSector(e.target.value);
          }}
        >
          <option value="">Elige un sector...</option>
          <option value="Fontanería">Fontanería</option>
          <option value="Carpintería">Carpintería</option>
          <option value="Pintura">Pintura</option>
          <option value="Electricidad">Electricidad</option>
          <option value="Albañilería">Albañilería</option>
          <option value="Climatización">Climatización</option>
          <option value="Mudanzas">Mudanzas</option>
          <option value="Jardinería">Jardinería</option>
        </select>
        <select
          className="form-select"
          id="inputGroupSelect02"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="">Elige una provincia...</option>
          {regions.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ul className="card-grid mx-3 list-unstyled">
          {!filterItems.length > 0 ? (
            <p className="text-filter text-center">
              No se han encontrado coincidencias
            </p>
          ) : (
            filterItems.map((item, index) => (
              <li key={index}>
                <CardWorker
                  name={item.name}
                  sector={item.sector}
                  image={item.pictures}
                  id={item.id}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
