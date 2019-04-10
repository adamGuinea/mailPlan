import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import CreditCheck from "../utils/CreditCheck";

class Dashboard extends React.Component {
  render() {
    return (
      <main className="dashboard">
        <CreditCheck />
        <SurveyList />
      </main>
    );
  }
}

export default Dashboard;
