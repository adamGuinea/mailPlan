import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "./Loader";

class CreditCheck extends Component {
  render() {
    const user = this.props.auth;
    let creditCheck;

    if (user.credits === undefined) {
      return <Loader />;
    } else if (user.credits > 1) {
      creditCheck = (
        <p>You have enough credits to begin a new marketing campaign</p>
      );
    } else {
      creditCheck = (
        <p>
          Please add some credits to begin your new campaign using credit card
          number 4242 4242 4242 4242. Don't worry it's in test mode.
        </p>
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
