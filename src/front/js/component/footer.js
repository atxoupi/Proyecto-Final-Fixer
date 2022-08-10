import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-5 py-3 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#FFC300"
        fill-opacity="1"
        d="M0,160L21.8,165.3C43.6,171,87,181,131,197.3C174.5,213,218,235,262,213.3C305.5,192,349,128,393,101.3C436.4,75,480,85,524,128C567.3,171,611,245,655,229.3C698.2,213,742,107,785,90.7C829.1,75,873,149,916,181.3C960,213,1004,203,1047,176C1090.9,149,1135,107,1178,106.7C1221.8,107,1265,149,1309,192C1352.7,235,1396,277,1418,298.7L1440,320L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
      ></path>
    </svg>
    {/* En el siguiente div es donde introducimos todo lo que queramos que vaya en el footer */}
    <div className="pie">
      <p className="m-0">
        © Fixer Made with <i className="fa fa-heart text-danger" /> by Alicia,
        Carolina & Andrés
      </p>
    </div>
  </footer>
);
