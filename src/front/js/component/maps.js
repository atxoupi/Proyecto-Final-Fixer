import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Maps = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.ubication();
  }, []);
  console.log(store.routeMap);
  console.log(store.userLoc);
  return (
    <>
      {store.routeMap === undefined ? (
        <div
          className="py-2"
          style={{
            width: "100%",
            borderRadius: "2rem",
          }}
        >
          <iframe
            style={{
              borderRadius: "0.5rem",
              marginTop: "1rem",
            }}
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            // aqui traigo la del fetch

            src={
              "https://maps.google.com/?q=41.39613369,2.13973121&z=14&t=m&output=embed"
            }
          ></iframe>{" "}
        </div>
      ) : (
        <div
          className="py-2"
          style={{
            width: "100%",
            borderRadius: "2rem",
          }}
        >
          <iframe
            style={{
              borderRadius: "0.5rem",
              marginTop: "1rem",
            }}
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            // aqui traigo mi url

            src={store.routeMap}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Maps;
