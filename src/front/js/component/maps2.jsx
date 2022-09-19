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

  const onSelect = (item) => {
    setSelected(item);
  };
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
                    onClick={() => onSelect(item)}
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
      ) : null}
    </LoadScript>
  );
};

export default MapContainer;
