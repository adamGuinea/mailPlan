import React from "react";
import NewsSingle from "./NewsSingle";
import Error from "./Error";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false
    };
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_NEWS_SECRET_KEY;
    const url = `https://newsapi.org/v2/${this.props.news.type}?${
      this.props.news.query
    }&apiKey=${API_KEY}`;
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
    return (
      <React.Fragment>
        <h1 className="tech-header">Latest in tech;</h1>
        <div className="card-group">{this.renderItems()}</div>
      </React.Fragment>
    );
  }
}

export default News;
