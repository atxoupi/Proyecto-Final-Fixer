//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";
import "../styles/workPost.css";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/signup.css";
import "../styles/requestForm.css";
import "../styles/login.css";
import "../styles/modalForm.css";
import "../styles/workerprofile.css";
import "../styles/star.css";


//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render( < Layout / > , document.querySelector("#app"));