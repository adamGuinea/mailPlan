import React from "react";

const NewsSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
        <span className="car-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          Full article
        </a>
      </div>
    </div>
  </div>
);

export default NewsSingle;
