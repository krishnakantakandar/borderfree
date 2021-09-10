import React from "react";
import "./card.css";
import data from "../data/data";
function AddToCard({ Name, description, image, id }) {
  return (
    <div className="card-container">
      <img src={image} style={{ height: "100%", width: "100%" }} />
      <div style={{ height: "100%", width: "100%" }}>
        <p>{Name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AddToCard;
