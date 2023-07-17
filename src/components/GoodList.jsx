import React from 'react'
import GoodItem from './GoodItem';

function GoodList({ goods, addToBasket }) {
  if (!goods.length) {
    return <h2>Nothing here</h2>;
  }

  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodItem key={item.id} item={item} addToBasket={addToBasket} />;
      })}
    </div>
  );
}

export default GoodList