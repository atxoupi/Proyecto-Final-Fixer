import React from "react";
import image1 from "../../img/Group 3.png";
import image2 from "../../img/Group 1.png";
import image3 from "../../img/Group 2.png";
export const CentralIcons = () => {
  return (
    <>
      <div className="row w-90 mt-4 d-flex justify-content-evenly">
        <div className="col-lg-3 col-md-3 col-6 card-image1">
          <img
            src={image1}
            alt="colgar anuncio"
            style={{ width: "300px" }}
          ></img>
        </div>
        <div className="col-lg-3 col-md-3 col-6 card-image2">
          <img
            src={image2}
            alt="seleccionar presupuestos"
            style={{ width: "300px" }}
          ></img>
        </div>
        <div className="col-lg-3 col-md-3 col-6 card-image3">
          <img src={image3} alt="pintor" style={{ width: "300px" }}></img>
        </div>
      </div>
    </>
  );
};
