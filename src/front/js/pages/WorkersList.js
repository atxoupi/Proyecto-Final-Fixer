import React, { useEffect, useState, useContext, useMemo } from "react";
import { CardWorker } from "../component/cardWorker";
import { Context } from "../store/appContext";

export const WorkersList = () => {
  const { store, actions } = useContext(Context);

  const workers = store.workers;
  console.log(workers);
  const [filterItems, setFilterItems] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedSector, setSelectedSector] = useState([]);
  useEffect(() => {
    actions.listWorkers();
  }, []);
  // Filtrar elementos por ciudad
  // getFilteredItems();
  setFilterItems([...workers]);
  console.log(filterItems);
  // const getFilteredItems = () => {
  //   if (!selectedCity) {
  //     return filterItems;
  //   } else {
  //     workers.filter((item) => item.city === selectedCity);
  //     console.log(filterItems);
  //     setFilterItems(filterItems);
  //   }
  // };
  // getFilteredItems();
  // console.log(filterItems);
  // let filteredItems = useMemo(getFilteredItems[(selectedCity, filterItems)]);
  // console.log(filteredItems);
  //     filterItems.filter((item) => {
  //       if (selectedCity !== item.city) {
  //        ([...filterItems, ...item]);
  //         //       setFilterItems([...filterItems, filterItems.concat(item)]);
  //       }
  //       console.log(filterItems);
  //       return filterItems;
  //     });
  //   }
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
          onChange={(e) => {
            setSelectedSector(e.target.value);
          }}
        >
          <option value="Todos">Elige un sector...</option>
          <option value="Carpintería">Carpintería</option>
          <option value="Fontanería">Fontanería</option>
          <option value="Pintura">Pintura</option>
          <option value="Electricidad">Electricidad</option>
        </select>
        <select
          className="form-select"
          id="inputGroupSelect02"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option defaultValue>Elige una provincia...</option>
          <option value="Madrid">Madrid</option>
          <option value="Gava">Gava</option>
          <option value="Guadalajara">Guadalajara</option>
          <option value="Sevilla">Sevilla</option>
        </select>
      </div>
      <div>
        <ul className="card-grid">
          {/* {filteredListByCity.length === 0 ? (
            <p>No se han encontrado coincidencias</p>
          ) : (
            filteredListByCity.map((element, index) => (
              <li key={index}>
                <CardWorker {...element} key={index} />{" "}
              </li>
            ))
          )} */}
        </ul>
      </div>
    </>
  );
};
