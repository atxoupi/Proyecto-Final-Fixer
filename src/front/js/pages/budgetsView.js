import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SentBudgets } from "../component/sentBudgets";
import { WorkPost } from "../component/workPost";
import { Context } from "../store/appContext";

export const BudgetsView = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.showbudget(params.id);
  }, []);
  console.log(store.budget);
  // console.log(store.budget[0].work);
  return (
    <>
      <div className="work-sentBudgets mb-4">
        <WorkPost
        // description={store.budget.work.description}
        // location={store.budget.work.location}
        // sector={store.budget.work.sector}
        // title={store.budget.work.title}
        // showButton={false}
        />
      </div>

      {store.budget.length === 0 ? (
        <p>No hay coincidencias</p>
      ) : (
        store.budget.map((item, index) => (
          <div
            className="budget-container mx-auto mb-2 border-bottom border-warning"
            style={{ width: "80%" }}
            key={index}
          >
            <SentBudgets
              user_id={item.user_id}
              worker_id={item.worker_id}
              url={item.url}
              duration={item.duration}
              price={item.price}
            />
          </div>
        ))
      )}
    </>
  );
};
