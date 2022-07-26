import React, { useEffect, useContext } from "react";
import { WorkPost } from "../component/workPost";
import { Context } from "../store/appContext";

export const PostedWorks = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.showWork();
  }, []);
  console.log(store.work);
  console.log(store.usuario);
  console.log(store.icons);
  return (
    <>
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3">
          Estas són las ofertas disponibles de tu sector
        </h3>
        {store.work.map((item, index) => (
          <WorkPost
            key={index}
            description={item.description}
            location={item.location}
            sector={item.sector}
            user_id={item.user_id}
            worker_id={item.worker_id}
          />
        ))}
      </div>
    </>
  );
};
