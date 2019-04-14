import React from "react";

const NewsSingle = ({ item }) => (
  <div className="card-group">
    <div className="col s12 m6 card">
      <img src={item.urlToImage} alt={item.title} style={{ width: "100%" }} />
      <div className="card-container">
        <h6>
          <b>{item.source.name}</b>
        </h6>
        <p>
          <b>{item.title}</b>
        </p>
        <div className="card-action">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            Full article
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NewsSingle;

// <div className="col s12 m6 news-single">
//     <div className="card">
//       <div className="card-image">

//         <span className="car-title">{item.source.name}</span>
//       </div>
//       <div className="card-content">
//         <p>{item.title}</p>
//       </div>
//       <div className="card-action">
//         <a href={item.url} target="_blank" rel="noopener noreferrer">
//           Full article
//         </a>
//       </div>
//     </div>
//   </div>
