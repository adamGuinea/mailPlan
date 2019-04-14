import React from "react";
import NewsSingle from "./NewsSingle";
import Error from "./Error";
const keys = require("../../config/keys");

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=${process.env.NEWS_SECRET_KEY}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
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
      return this.state.news.map(item => (
        <NewsSingle key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
