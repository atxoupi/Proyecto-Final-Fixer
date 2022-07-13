import React from "react";
// import "../../img/set-of-tools-with-copy-space.jpg"
import imagenHeader from "../../img/set-of-tools-with-copy-space.jpg";

export const Header = () => {
  return (
    <>
      <div className="container-header container-fluid d-flex justify-content-center mb-2 px-4">
        <div className="row">
          <div className="col-5">
            <button type="button" className="btn btnHeader">
              Busca un profesional
            </button>
          </div>
          <div className="col-5">
            <button type="button" className="btn btnHeader">
              Publica un anuncio
            </button>
          </div>
        </div>
      </div>
      <div
        className="container wraper-header position-relative"
        style={{ height: "450", width: "100%" }}
      >
        <img
          src={imagenHeader}
          className="img-fluid d-flex justify-content-center"
          alt="..."
          style={{ objectFit: "cover", maxHeight: "400px", width: "800px" }}
        ></img>
        <div class="row">
          <div className="check-container position-absolute img-overlay">
            <h1>Choose expertise</h1>
            <label class="checkbox-inline">
              <input type="checkbox" id="Check1" value="PHP" /> PHP
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="Check2" value="CSS" /> CSS
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="Check3" value="Java" /> Java
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="Check4" value="HTML" /> HTML
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" id="Check3" value="Bootstrap" disabled />{" "}
              Bootstrap
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
