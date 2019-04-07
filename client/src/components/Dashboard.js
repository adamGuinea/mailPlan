import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends React.Component {
  render() {
    const user = this.props.auth;
    let creditCheck;

    user.credits > 0
      ? (creditCheck = (
          <p>You have enough credits to begin a new marketing campaign</p>
        ))
      : (creditCheck = (
          <p>
            Please add some credits to begin your new campaign using credit card
            number 4242 4242 4242 4242. Don't worry it's in test mode.
          </p>
        ));
    return (
      <div>
        {creditCheck}
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

const mapStateToProps = state => ({
  auth: state.auth,
  surveys: state.surveys
});

export default connect(mapStateToProps)(Dashboard);
