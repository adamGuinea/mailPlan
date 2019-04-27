import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import SurveyDelete from "../SurveyDelete";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <button className="survey-result">YES: {survey.yes}</button>
            <button className="survey-result">NO: {survey.no}</button>
            <SurveyDelete />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
