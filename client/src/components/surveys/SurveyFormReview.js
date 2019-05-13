import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="survey-label">{label}</label>
        <div className="survey-form-review" style={{ marginBottom: "10px" }}>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="survey-review">
      <h3>Confirm your entries</h3>
      {reviewFields}
      <button
        className="orange accent-3 white-text btn-flat"
        onClick={onCancel}
      >
        Go Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green accent-3 white-text btn-flat right"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
