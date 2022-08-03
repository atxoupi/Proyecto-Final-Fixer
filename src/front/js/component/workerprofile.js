import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import obrero from "../../img/icons/obrero.png";
import { useParams } from "react-router-dom";
import { Star } from "../component/star.js";
import { Rating } from "../component/rating.js";

export const Workerprofile = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  // const [rating, setRating] = useState();
  useEffect(() => {
    actions.getworker(parseInt(id));
    actions.getRating(parseInt(id));
  }, []);
  // const valueRating = [1, 2, 3, 4, 5];
  const ratingAverage = (ratings) => {
    let sum = 0;
    for (let rating of ratings) {
      sum += rating;
    }
    return sum / 2;
  };
  let numRating = ratingAverage(store.ratings);
  const activeStar = {
    fill: "yellow",
  };
  console.log(numRating);
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

                <Rating value={numRating} color={activeStar} />
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

// <label className="star">
//   <input value={number} className="stars-radio-input">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-6 w-6"
//       width={40}
//       height={40}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth="2"
//       style={numRating >= number ? activeStar : {}}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
//       />
//     </svg>
//   </input>
// </label>;
