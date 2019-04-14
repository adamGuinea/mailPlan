import React, { Component } from "react";
import axios from "axios";
import SingleSide from "./SingleSide";
import Error from "./Error";
const keys = require("../../config/keys");

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=${keys.newsSecretKey}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          sidenews: res.data.articles
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map(item => (
        <SingleSide key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default SideNews;
