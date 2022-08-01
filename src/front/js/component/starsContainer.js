import React, { useContext, useState } from "react";
import { Star } from "../component/star.js";
import { Context } from "../store/appContext";

export const StarsContainer = ({ work_id, worker_id }) => {
  const { store, actions } = useContext(Context);
  console.log(work_id, worker_id);
  const valueRating = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();
  const activeStar = {
    fill: "yellow",
  };

  const changeRating = (e) => {
    e.preventDefault();
    actions.addingRating(rating, comment, worker_id, work_id);
    console.log(rating, comment);
  };

  return (
    <div className="container">
      <h1 className="result"></h1>
      <div className="stars">
        {valueRating.map((number, index) => (
          <Star
            number={number}
            key={index}
            changeRating={(e) => setRating(e.target.value)}
            style={rating >= number ? activeStar : {}}
          />
        ))}

        <form onSubmit={changeRating}>
          <label> Comment</label>
          <input
            className="rating-comment"
            onChange={(e) => setComment(e.target.value)}
          ></input>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
