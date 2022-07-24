import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const VerPresupuesto = () => {
  const [uploadImages, setUploadImages] = useState("");
  const [downloadImages, setDownloadImages] = useState("");
  const { actions } = useContext(Context);

  return (
    <div className=" container text-center mt-5">
      <div>
        <a
          href="https://res.cloudinary.com/demo/image/upload/fl_attachment:myPdf/multi_page_pdf.pdf"
          download
        >
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
