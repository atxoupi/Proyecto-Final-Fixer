import React, { useEffect, useContext } from "react";
import { WorkPost } from "../component/workPost";
import { WorkPostForWorker } from "../component/workPostForWorker";
import { Context } from "../store/appContext";
import notFound from "../../img/icons/not-found.png";

export const PostedWorks = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.showWork();
  }, []);

  return (
    <>
      {store.usuario ? (
        <div className="container-works mx-auto" style={{ marginTop: "80px" }}>
          <h3 className="text-center mb-4">Estas son tus ofertas publicadas</h3>{" "}
          {store.work.length > 0
            ? store.work.map((item, index) => (
                <WorkPost
                  key={index}
                  description={item.description}
                  location={item.location}
                  sector={item.sector}
                  title={item.title}
                  user_id={item.user_id}
                  worker_id={item.worker_id}
                  work_id={item.id}
                  showButton={true}
                />
              ))
            : null}
        </div>
      ) : (
        <div className="container-works mx-auto">
          {store.work.length > 0 ? (
            <>
              <h3 className="text-center mt-3 mb-3">
                Estas son las ofertas encontradas en tu zona
              </h3>
              {store.work.map((item, index) => (
                <WorkPostForWorker
                  key={index}
                  title={item.title}
                  description={item.description}
                  location={item.location}
                  sector={item.sector}
                  user_id={item.user_id}
                  worker_id={item.worker_id}
                  work_id={item.id}
                />
              ))}
            </>
          ) : (
            <div className="text-center " style={{ marginTop: "80px" }}>
              <img src={notFound} alt="notFound image"></img>
              <h3 className="text-center mt-5 mb-3">
                No se han encontrado ofertas en tu zona y sector{" "}
              </h3>
            </div>
          )}
        </div>
      )}
    </>
  );
};
