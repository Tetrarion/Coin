import React from 'react';
import Coin from './Coin';

function StoreCoinList({ tasks }) {
  if (tasks.length) {
    return (
      tasks.map((task) => <Coin key={task.id} task={task} />)
    );
  }
  return (
    <h1 className="basket__info-string">There is nothing in your basket yet</h1>
  );
}
export default StoreCoinList;
