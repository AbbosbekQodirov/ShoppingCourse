import React from "react";

function BasketItem({
  id,
  name,
  price,
  quantity,
  removeFrombasket,
  incrementQuantity,
  decrementQuantity,
}) {
  return (
    <li className="collection-item">
      {name}x{quantity} = {price * quantity} <b>$</b>
      <span className="secondary-content">
        <a
          onClick={() => {
            incrementQuantity(id);
          }}
          className="waves-effect waves-light btn btnq"
        >
          <i className="material-icons left">exposure_plus_1</i>
          add
        </a>
        <a
          onClick={() => {
            decrementQuantity(id);
          }}
          style={{ marginLeft: 10 }}
          className="waves-effect waves-light btn btnq"
        >
          <i className="material-icons left">exposure_minus_1</i>
          remove
        </a>

        <a
          onClick={() => {
            removeFrombasket(id);
          }}
          style={{ margin: "0 10px" }}
          className="waves-effect waves-light btn btnq"
        >
          <i className="material-icons basket-delete">delete_forever</i>
          delete
        </a>
      </span>
    </li>
  );
}

export default BasketItem;
