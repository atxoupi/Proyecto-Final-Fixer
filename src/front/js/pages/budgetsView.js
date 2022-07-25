import React from "react";
import { SentBudgets } from "../component/sentBudgets";
import { WorkPost } from "../component/workPost";

export const BudgetsView = () => {
  return (
    <>
      <div className="work-sentBudgets">
        <WorkPost />
      </div>
      <div
        className="budget-container mx-auto border border-warning"
        style={{ width: "80%" }}
      >
        <SentBudgets />
      </div>
    </>
  );
};
