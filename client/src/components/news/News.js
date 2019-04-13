import React from "react";
import NewsSingle from "./NewsSingle";
import { API_KEY } from "./keys";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          news: data.articles
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.news.map(item => (
      <NewsSingle key={item.url} item={item} />
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
