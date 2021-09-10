import React from "react";
import "./card.css";
import data from "../data/data";
function Card({ Name, description, image, id }) {
  if (!localStorage.getItem("myProduct"))
    localStorage.setItem("myProduct", JSON.stringify([]));

  const add = (id) => {
    let arr = JSON.parse(localStorage.getItem("myProduct"));

    data.forEach((cur) => {
      if (cur.id == id) arr.push(cur);
    });

    console.log(arr, typeof arr);
    // arr.push(id);
    localStorage.setItem("myProduct", JSON.stringify(arr));
  };
  return (
    <div className="card-container">
      <img src={image} style={{ height: "100%", width: "100%" }} />
      <div style={{ height: "100%", width: "100%" }}>
        <p>{Name}</p>
        <p>{description}</p>
        <div
          id={id}
          onClick={() => {
            add(id);
          }}
          style={{
            height: "20%",
            width: "100%",
            background: "grey",
            textAlign: "center",
            color: "white",
            border: "5px",
          }}
        >
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default Card;
