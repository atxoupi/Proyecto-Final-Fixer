import React from "react";
import { WorkPost } from "../component/workPost";

export const PostedWorks = () => {
  return (
    <>
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3">
          Estas són las ofertas disponibles de tu sector
        </h3>
        <WorkPost />
        <WorkPost />
      </div>
    </>
  );
};
