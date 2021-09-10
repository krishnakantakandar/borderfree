import logo from "./logo.svg";
import "./App.css";

import data from "./data/data";
import Card from "./card/Card";
import React, { useState } from "react";
import AddToCard from "./card/addToCard";
// import data from "./data/data";
function App() {
  const [win, setwin] = useState(false);

  const showCart = () => {
    setwin(!win);
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100px",
          width: "100px",
          backgroundImage: "url('cart.png')",
          backgroundSize: "cover",
        }}
        onClick={showCart}
      ></div>
      {win ? (
        <div
          style={{
            position: "absolute",
            top: "20%",
            // display: "flex",
            height: "30%",
            width: "30%",
          }}
        >
          {JSON.parse(localStorage.getItem("myProduct")).map((cur) => {
            return (
              <AddToCard
                Name={cur.Name}
                description={cur.description}
                image={cur.img}
                id={cur.id}
              ></AddToCard>
            );
          })}
        </div>
      ) : (
        <div className="Card-container">
          {data.map((cur) => {
            return (
              <Card
                Name={cur.Name}
                description={cur.description}
                image={cur.img}
                id={cur.id}
              ></Card>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
