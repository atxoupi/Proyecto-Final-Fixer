import React, { useContext, useEffect } from "react";
import { SentBudgets } from "../component/sentBudgets";
import { WorkPost } from "../component/workPost";
import { Context } from "../store/appContext";

export const BudgetsView = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.showbudget();
  }, []);
  console.log(store.budget);
  return (
    <>
      <div className="work-sentBudgets">
        <WorkPost />
      </div>
      <div
        className="budget-container mx-auto border border-warning"
        style={{ width: "80%" }}
      >
        {store.budget.length === 0 ? (
          <p>No hay coincidencias</p>
        ) : (
          store.budget.map((item, index) => (
            <SentBudgets
              key={index}
              user_id={item.user_id}
              worker_id={item.worker_id}
              url={item.url}
            />
          ))
        )}
      </div>
    </>
  );
};
