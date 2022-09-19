import React, { useState, useContext, useEffect, useCallback } from "react";
import { Context } from "../store/appContext";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "500px",
};

const center = {
  lat: 41.39613369,
  lng: 2.13973,
};

function Maps() {
  const { store, actions } = useContext(Context);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.KEY_GOOGLE_MAPS,
  });
  const [infoWindowID, setInfoWindowID] = useState("");
  useEffect(() => {
    actions.ubication();
  }, []);
  console.log(store.routeMap);
  console.log(store.userLoc);

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(store.userLoc);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {store.routeMap.map((worker, i) => {
        const marker = { lat: worker.latitude, lng: worker.longitude };

        return (
          <Marker
            position={marker}
            key={worker.id}
            onClick={() => {
              setInfoWindowID(worker.id);
            }}
          >
            {infoWindowID === worker.id && (
              <InfoWindow>
                <h3>
                  <strong>{worker.name} </strong>
                </h3>
                <p>{worker.adress} </p>
                <p>{worker.tlf_number} </p>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

// const Maps = () => {
//   const { store, actions } = useContext(Context);
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.KEY_GOOGLE_MAPS,
//   });
//   if (isLoaded) {
//     console.log("map is loaded");
//   }
//   const mapDefault = {
//     lat: 41.39613369,
//     lng: -38.523,
//   };
//   // const newMap = new google.maps({
//   //   zoom: 4,
//   //   center: mapDefault,
//   // });
//   useEffect(() => {
//     actions.ubication();
//   }, []);
//   console.log(store.routeMap);
//   console.log(store.userLoc);
//   return (
//     <>
//       <GoogleMap></GoogleMap>
//       {/* {store.routeMap === undefined ? (
//         <div
//           className="py-2"
//           style={{
//             width: "100%",
//             borderRadius: "2rem",
//           }}
//         >
//           <iframe
//             style={{
//               borderRadius: "0.5rem",
//               marginTop: "1rem",
//             }}
//             width="100%"
//             height="400"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             // aqui traigo la del fetch

//             src={
//               "https://maps.google.com/?q=41.39613369,2.13973121&z=14&t=m&output=embed"
//             }
//           ></iframe>{" "}
//         </div>
//       ) : (
//         <div
//           className="py-2"
//           style={{
//             width: "100%",
//             borderRadius: "2rem",
//           }}
//         >
//           <iframe
//             style={{
//               borderRadius: "0.5rem",
//               marginTop: "1rem",
//             }}
//             width="100%"
//             height="400"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             // aqui traigo mi url

//             src={store.routeMap}
//           ></iframe>
//         </div>
//       )} */}
//     </>
//   );
// };

export default Maps;
