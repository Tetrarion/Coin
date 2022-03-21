import React from 'react';
import { StoreCoinList } from './components/StoreCoinList';
import { Header } from './components/BasketHeader';

export function StorePage({ tasks }) {
  const names = ['Name', 'Count', 'Price', 'Total price'];

  return (
    <div className="basket">
      <Header tasks={tasks} names={names} />
      <StoreCoinList tasks={tasks} />
    </div>
  );
}
