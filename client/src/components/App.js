import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../index.css";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import Footer from "./Footer";
import News from "./news/News";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        {/* <div className="container"> */}
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/news" component={News} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          <Footer />
        </div>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
