import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const WorkPost = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
          <div className="post-box">
            <div className="post-card">
              <div className="work-title">Trabajo 1</div>
              <div className="work-description">
                Necesito que me corten la higuera
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
