import React from "react";
import { useContext, useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Context } from "../store/appContext";

const MapContainer = () => {
  const { store, actions } = useContext(Context);
  const [selected, setSelected] = useState({});

  // Traemos todas las ubicaciones del backend
  useEffect(() => {
    store.auth ? actions.ubication() : null;
  }, []);
  console.log(store.userLoc);
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.KEY_GOOGLE_MAPS}>
      {/* La variable userLoc contiene la ubicación del usuario, si esta existe muestra las ubicaciones de los trabajadores, 
      si no es está logueado o no está la dirección del usuario muestra un mapa por defecto */}
      {store.auth && store.userLoc !== undefined ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={store.userLoc}
        >
          {store.routeMap.length > 0
            ? store.routeMap.map((item) => {
                return (
                  <Marker
                    key={item.id}
                    position={item.coordinates}
                    onClick={() => setSelected(item)}
                  />
                );
              })
            : null}
          {selected.name && (
            <InfoWindow
              position={selected.coordinates}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                <h3 style={{ color: "#ffc300" }}>{selected.name}</h3>
                <p>{selected.adress}</p>
                <p>{selected.tfl_number}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={defaultCenter}
        ></GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapContainer;
