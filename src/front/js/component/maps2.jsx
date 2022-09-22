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
    actions.ubication();
  }, []);

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
      {store.userLoc !== null ? (
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
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
          zoom={13}
          center={defaultCenter}
        >
          {store.routeMap.length > 0
            ? store.routeMap.map((item) => {
                return (
                  <Marker
                    key={item.id}
                    position={item.coordinates}
                    onClick={() => onSelect(item)}
                  />
                );
              })
            : null}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default MapContainer;
