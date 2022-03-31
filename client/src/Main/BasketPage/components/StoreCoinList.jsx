import React from 'react';
import { Coin } from './Coin';

export function StoreCoinList({ tasks }) {
  if (tasks.length) {
    return (
      <div className="basket__coins-purchase-list">
        {
        tasks.map((task) => <Coin key={task.id} task={task} />)
        }
      </div>
    );
  }
  return (
    <h1 className="basket__info-string">There is nothing in your basket yet</h1>
  );
}
