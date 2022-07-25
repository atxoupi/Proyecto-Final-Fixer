import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const VerPresupuesto = ({ url }) => {
  const [uploadImages, setUploadImages] = useState("");
  const [downloadImages, setDownloadImages] = useState("");
  const { actions } = useContext(Context);

  return (
    <div className=" container text-center mt-5">
      <div>
        <a href={url} download>
          {" "}
          <button
            type="button"
            className="btn btnHeader mt-3"
            // onClick={(e) => actions.download(downloadImages)}
          >
            Ver presuesto
          </button>
        </a>
      </div>
      {/* <a // atributo target= "_blank"href>
         <button className=" btn"  >
          decarga

        </button> 
        </a> */}
    </div>
  );
};

export default VerPresupuesto;
/* 1 para ver los trabajos q ofertan 
1 para ver los trabajos en los q te has inscrito estas dos para empresas (esta hacerlo a traves de budget)

3ra vista para clientes para ver las ofertas q el ha creado
4ta para ver los presupuestos q les han enviado(esta hacerlo a traves de budget)*/
