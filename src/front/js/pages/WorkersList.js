import React, {useEffect,useContext} from "react";
import { Context } from "../store/appContext";

export const WorkersList = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.listWorkers()
        
    }, [])
    console.log(store.workers);
  return (
    <>
      <div class="input-group mb-3">
        <select class="form-select" id="inputGroupSelect02">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select class="form-select" id="inputGroupSelect02">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </>
  );
};
