import React from "react";

const SingleSide = ({ item }) => (
  <div style={{ paddingTop: "9.5px" }}>
    <div className="divider" />
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <div className="section hoverable" style={{ textAlign: "center" }}>
        <img src={item.urlToImage} alt={item.title} style={{ width: "100%" }} />
        <h5>{item.source.name}</h5>
        <p>{item.title}</p>
      </div>
    </a>
  </div>
);

export default SingleSide;
