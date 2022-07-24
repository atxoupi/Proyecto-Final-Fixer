import React, { useContext } from "react";
import "../../styles/home.css";
import { Header } from "../component/header";
import ModalForm from "../component/modalForm";
import VerPresupuesto from "../component/verPresupuesto";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <ModalForm />
        <VerPresupuesto />
      </div>
    </div>
  );
};
