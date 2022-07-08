import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1> Let's Go Fixers </h1>{" "}
      <img src="https://cdn.ngamers.net/monthly_2018_12/gato.PNG.4a3af0bd572a49227328b1a215309768.PNG" />{" "}
    </div>
  );
};
