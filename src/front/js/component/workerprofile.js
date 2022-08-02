import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import obrero from "../../img/icons/obrero.png";
import { useParams } from "react-router-dom";

export const Workerprofile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    actions.getworker(parseInt(id));
  }, []);

  return (
    <>
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3 fw-bold">Perfil de Empresa</h3>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-5 mx-auto">
            <div className="post-box">
              <div className="post-photo d-flex justify-content-center ">
                {store.workerprofile.pictures === null ? (
                  <img
                    src={obrero}
                    className="card-img-top mx-auto mt-2"
                    alt="imagen obrero"
                    style={{ width: "150px" }}
                  />
                ) : (
                  <img
                    src={store.workerprofile.pictures}
                    className="card-img-top rounded-3"
                    alt="imagen "
                  />
                )}
              </div>
              <div className="post-card m-2 pt-2 mt-2">
                <div className="worker-name d-flex">
                  {" "}
                  <div className="fw-bold">Nombre :</div>{" "}
                  <div className="ms-3">{store.workerprofile.name}</div>
                </div>
                <div className="worker-email d-flex">
                  {" "}
                  <div className="fw-bold">Email :</div>
                  <div className="ms-2"> {store.workerprofile.email}</div>{" "}
                </div>
                <div className="worker-city d-flex">
                  <div className="fw-bold">Ciudad :</div>
                  <div className="ms-3"> {store.workerprofile.city}</div>
                </div>
                <div className="worker-sector d-flex">
                  {" "}
                  <div className="fw-bold">Sector:</div>
                  <div className="ms-3"> {store.workerprofile.sector}</div>
                </div>
                <div className="worker-tlf d-flex">
                  {" "}
                  <div className="fw-bold">Número Tlf :</div>
                  <div className="ms-3">{store.workerprofile.tlf_number} </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <a
                    className="ancorforbuttoncontact btn whatsapp-button "
                    type="button"
                    href={`https://wa.me/${store.workerprofile.tlf_number}`}
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                  <a
                    className="ancorforbuttoncontact mail-button"
                    role="button"
                    type="button"
                    href={`mailto:${store.workerprofile.email}?subject=Muy buenas ${store.workerprofile.name}!`}
                  >
                    {" "}
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
