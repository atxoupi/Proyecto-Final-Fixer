import React, { useContext, useState } from "react";
import { Star } from "../component/star.js";
import { Context } from "../store/appContext";

export const StarsContainer = ({ work_id, worker_id }) => {
  const { actions } = useContext(Context);

  const valueRating = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();
  const activeStar = {
    fill: "yellow",
  };
  // La función se activa con el onSubmit pasando el rating y el comment seteados y el worker_id y el work_id en forma de props
  const changeRating = (e) => {
    e.preventDefault();
    actions.addingRating(rating, comment, worker_id, work_id);
  };

  return (
    <>
      <div className="tittle-stars mt-2">Valora al trabajador</div>

      <div className="stars mt-2 d-flex justify-content-center">
        {/* Mapeamos el array con los números de la valoración y seteamos el valor del input del componente Star */}
        {valueRating.map((number, index) => (
          <Star
            number={number}
            key={index}
            changeRating={(e) => setRating(e.target.value)}
            style={rating >= number ? activeStar : {}}
          />
        ))}{" "}
      </div>
      <div className="mt-2">
        <form onSubmit={changeRating}>
          <div className="input-group" style={{ minWidth: "250px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Deja un comentario..."
              aria-describedby="button-addon2"
              onChange={(e) => setComment(e.target.value)}
            ></input>
            <button
              type="submit"
              id="button-addon2"
              className="btn btn-send-comment"
            >
              <i className="far fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
