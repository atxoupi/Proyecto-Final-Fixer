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
  ); // ponemos ? para solucionar cuando me lee con un undefined sabiendo que no lo es

  return (
    <>
      {oneBudget.length === 0 ? (
        <div
          className="not-found-document text-center"
          style={{ marginTop: "80px" }}
        >
          <span>
            <img
              src={notFoundBudget}
              alt="not-found-budget"
              style={{ width: "3rem" }}
            />
          </span>
          <h3 className=" mt-5">
            No se han encontrado presupuestos para esta oferta
          </h3>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-lg-4 work-sentBudgets ms-3 my-5">
              <WorkPost
                description={oneBudget[0]?.work.description}
                location={oneBudget[0]?.work.location}
                sector={oneBudget[0]?.work.sector}
                title={oneBudget[0]?.work.title}
                showButton={false}
              />
            </div>
            <div className="col-lg-6 budget-container mb-2 ">
              {store.budget.map((item, index) => (
                <SentBudgets
                  key={index}
                  user_id={item.user_id}
                  worker_id={item.worker_id}
                  url={item.url}
                  duration={item.duration}
                  price={item.price}
                  id={item.id}
                  work_id={oneBudget[0]?.work.id}
                  picture={item.worker.pictures}
                  status={item.status}
                />
              ))}{" "}
            </div>
          </div>
        </>
      )}
    </>
  );
};
