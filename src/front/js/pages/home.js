import React, { useContext } from "react";
import "../../styles/home.css";
import { Header } from "../component/header";
import { StarsContainer } from "../component/starsContainer";

export const Home = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <StarsContainer />
    </div>
  );
};
