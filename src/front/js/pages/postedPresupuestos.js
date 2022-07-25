import React, { useEffect, useContext } from "react";
import { WorkPost } from "../component/workPost";
import { Context } from "../store/appContext";

export const PostedPresupuestos = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.showbudget();
  }, []);
  console.log(store.work);
  console.log(store.usuario);
  return (
    <>
      <div className="container-works mx-auto">
        <h3 className="text-center mb-3">
          Estos són los preupuestos que has recibido
        </h3>
        {store.budget.map((item, index) => (
          <WorkPost
            key={index}
            description={item.work.description}
            location={item.work.location}
            user_id={item.user_id}
            worker_id={item.worker_id}
            url={item.url}
          />
        ))}
      </div>
    </>
  );
};
