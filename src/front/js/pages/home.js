import React, { useContext } from "react";
import "../../styles/home.css";
import { Header } from "../component/header";
import ModalForm from "../component/modalForm";
import VerPresupuesto from "../component/verPresupuesto";

export const Home = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <VerPresupuesto />
      </div>
    </div>
  );
};
