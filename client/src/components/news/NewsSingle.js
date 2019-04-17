import React from "react";

const NewsSingle = ({ item }) => (
  <div className="col s12 m9 card ">
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <img src={item.urlToImage} alt={item.title} style={{ width: "100%" }} />
      <div className="card-container">
        <h6>
          <b>{item.source.name}</b>
        </h6>
        <p>
          <b>{item.title}</b>
        </p>
      </div>
    </a>
  </div>
);

export default NewsSingle;
