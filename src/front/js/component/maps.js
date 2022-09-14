import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const Maps = () => {
  const { store, actions } = useContext(Context);
  // const [ruta, setRuta] = useState("");

  useEffect(() => {
    actions.ubication();
  }, []);

  return (
    <>
      {store.routeMap === undefined ? (
        <div className="py-2" style={{ width: "100%", borderRadius: "2rem" }}>
          <iframe
            style={{ borderRadius: "0.5rem", marginTop: "1rem" }}
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            // aqui traigo la el fetch

            src={
              "https://maps.google.com/?q=38.99613369,-1.85973121&z=14&t=m&output=embed"
            }
          ></iframe>
        </div>
      ) : (
        <div className="py-2" style={{ width: "100%", borderRadius: "2rem" }}>
          <iframe
            style={{ borderRadius: "0.5rem", marginTop: "1rem" }}
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
