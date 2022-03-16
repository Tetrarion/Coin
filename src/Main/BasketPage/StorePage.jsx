import React from 'react';
import { StoreCoinList } from './components/StoreCoinList';
import { Header } from './components/Header';

export function StorePage({ tasks }) {
  return (
    <div className="basket">
      <Header tasks={tasks} />
      <StoreCoinList tasks={tasks} />
    </div>
  );
}
