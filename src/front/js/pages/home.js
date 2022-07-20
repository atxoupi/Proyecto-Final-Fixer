import React, { useContext } from "react";
import "../../styles/home.css";
import { Header } from "../component/header";
import ModalForm from "../component/modalForm";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <ModalForm />
      </div>
    </div>
  );
};
