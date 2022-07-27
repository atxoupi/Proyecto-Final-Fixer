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
        <h3 className="text-center mb-3">Perfil de Empresa</h3>

        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
            <div className="post-box">
              <div className="post-photo">
                {store.workerprofile.pictures === null ? (
                  <img
                    src={obrero}
                    className="card-img-top mx-auto mt-2"
                    alt="imagen obrero"
                    style={{ width: "200px" }}
                  />
                ) : (
                  <img
                    src={store.workerprofile.pictures}
                    className="card-img-top"
                    alt="imagen "
                  />
                )}
              </div>
              <div className="post-card">
                <div className="worker-name">
                  {" "}
                  Nombre: {store.workerprofile.name}
                </div>
                <div className="worker-email">
                  {" "}
                  Email: {store.workerprofile.email}{" "}
                </div>
                <div className="worker-city">
                  Ciudad :{store.workerprofile.city}
                </div>
                <div className="worker-sector">
                  {" "}
                  Sector: {store.workerprofile.sector}
                </div>
                <div className="worker-tlf">
                  {" "}
                  Número Tlf: {store.workerprofile.tlf_number}
                </div>

                <a
                  className="ancorforbuttoncontact btn btnHeader"
                  type="button"
                  href={`https://wa.me/${store.workerprofile.tlf_number}`}
                  target="_blank"
                >
                  Contacto via Whatsapp
                </a>
                <a
                  className="ancorforbuttoncontact"
                  href={`mailto:${store.workerprofile.email}?subject=Muy buenas ${store.workerprofile.name}!`}
                >
                  {" "}
                  Contacto via email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
