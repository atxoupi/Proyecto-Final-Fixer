import React, { useContext } from "react";
<<<<<<< HEAD
import "../../styles/home.css";
import { Header } from "../component/header";
=======
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Request } from "../pages/request.js";
>>>>>>> b32e290505851c186230d9ce3b14615ca19a8338

export const Home = () => {
  return (
<<<<<<< HEAD
    <div className="container">
      <Header />
    </div>
=======
    <>
      <div className="text-center mt-5">
        <h1> Let 's Go Fixers </h1>{" "}
        <img src="https://cdn.ngamers.net/monthly_2018_12/gato.PNG.4a3af0bd572a49227328b1a215309768.PNG" />{" "}
      </div>
    </>
>>>>>>> b32e290505851c186230d9ce3b14615ca19a8338
  );
};
