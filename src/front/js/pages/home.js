import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Header } from "../component/header";
import { CentralIcons } from "../component/centralIcons";

export const Home = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <CentralIcons />
      </div>
    </div>
  );
};
