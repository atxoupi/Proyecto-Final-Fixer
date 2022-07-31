import React, { useContext, useState } from "react";
import { Star } from "../component/star.js";
import { Context } from "../store/appContext";

export const StarsContainer = () => {
  const { store, actions } = useContext(Context);
  const valueRating = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();
  const activeStar = {
    fill: "yellow",
  };

  const changeRating = (index, comment) => {
    setRating(index);
    setComment(comment);
    actions.addingRating(rating, comment);
    console.log(rating, comment);
  };

  return (
    <div className="container">
      <h1 className="result"></h1>
      <div className="stars">
        {valueRating.map((number, index) => (
          <Star
            index={index}
            key={number}
            changeRating={changeRating}
            style={rating >= index ? activeStar : {}}
          />
        ))}

        <form onSubmit={changeRating}>
          <label> Comment</label>
          <input className="rating-comment"></input>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};
