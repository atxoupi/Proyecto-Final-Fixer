import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SentBudgets } from "../component/sentBudgets";
import { WorkPost } from "../component/workPost";
import { Context } from "../store/appContext";
import notFoundBudget from "../../img/icons/rejected.png";

export const BudgetsView = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    actions.showbudget(id);
  }, []);
  const oneBudget = store?.budget.filter(
    (value) => value.work_id === parseInt(id)
  ); //para solucionar cuando me lee con un undefined sabiendo que no lo es, el ?

  return (
    <>
      {oneBudget.length === 0 ? (
        <div
          className="not-found-document text-center mt-5"
          style={{ minHeigth: "600px" }}
        >
          <span>
            <img
              src={notFoundBudget}
              alt="not-found-budget"
              style={{ width: "3rem" }}
            />
          </span>
          <p className="fw-bold mt-5">
            No se han encontrado presupuestos para esta oferta
          </p>
        </div>
      ) : (
        <>
          <div className="work-sentBudgets mb-4">
            <WorkPost
              description={oneBudget[0]?.work.description}
              location={oneBudget[0]?.work.location}
              sector={oneBudget[0]?.work.sector}
              title={oneBudget[0]?.work.title}
              showButton={false}
            />
          </div>
          {store.budget.map((item, index) => (
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
                id={item.id}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};
