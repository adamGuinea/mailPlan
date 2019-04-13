import React from "react";
import SurveyList from "./surveys/SurveyList";
import CreditCheck from "../utils/CreditCheck";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <CreditCheck />
      <SurveyList />
    </main>
  );
};

export default Dashboard;
