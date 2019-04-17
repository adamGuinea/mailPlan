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
import SideNews from "./news/SideNews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // news1: {
      //   type: "top-headlines",
      //   query: "sources=bbc-news"
      // },
      news2: {
        type: "top-headlines",
        query: "country=us&category=technology&language=en"
      },
      news3: {
        type: "everything",
        query: "q=marketing&language=en&pagesize=10"
      }
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
        <div className="container-fluid">
          <div className="row">
            <div className="col s12 m9">
              <Route
                path="/news"
                render={props => <News {...props} news={this.state.news2} />}
              />
              {/* <Route
                path="/news"
                render={props => <News {...props} news={this.state.news2} />}
              /> */}
            </div>
            <div className="col m3  hide-on-small-only">
              <Route
                path="/news"
                render={props => (
                  <SideNews {...props} news={this.state.news3} />
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
