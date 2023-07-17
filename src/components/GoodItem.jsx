import React from "react";

function GoodItem({ item, addToBasket }) {
  const { id, name, description, price, full_background } = item;
  return (
    <div className="card" key={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn"onClick={()=>{
          addToBasket({id, name, price});
        }}>Buy</button>
        <span style={{ fontSize: "1.8rem", float: "right" }}> {price}$</span>
      </div>
    </div>
  );
}

export default GoodItem;
