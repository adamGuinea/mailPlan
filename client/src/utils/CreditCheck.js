import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Loader";

class CreditCheck extends Component {
  render() {
    const user = this.props.auth;
    let creditCheck;

    if (user.credits === undefined) {
      return <Loader />;
    } else if (user.credits > 1) {
      creditCheck = (
        <div className="credits">
          You have enough credits to begin a new marketing campaign
          <div className=" fixed-action-btn">
            <Link
              to="/surveys/new"
              className="btn-floating btn-large red pulse"
            >
              <i className="large material-icons">add</i>
            </Link>
          </div>
        </div>
      );
    } else {
      creditCheck = (
        <div className="no-credits">
          Please add some credits to begin your new campaign using credit card
          number 4242 4242 4242 4242. Don't worry it's in test mode.
        </div>
      );
    }
    return creditCheck;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  surveys: state.surveys
});

export default connect(mapStateToProps)(CreditCheck);
