import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
import CreditCheck from "../utils/CreditCheck";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <CreditCheck />
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red pulse">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
