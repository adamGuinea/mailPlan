import React, { Component } from "react";
import News from "./News";
import SideNews from "./SideNews";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12 m9">
            <News news={this.state.news2} />
          </div>
          <div className="col m3  hide-on-small-only">
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewsPage;
