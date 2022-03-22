import React from 'react';
import { StoreCoinList } from './components/StoreCoinList';
import { Header } from './components/Header';

export function StorePage({ tasks }) {
  const names = ['Name', 'Count', 'Price', 'Total price', ' '];
  const namesForLargeScreeen = [' '];

  const screenWidth = window.screen.width;

  if (tasks.length) {
    return (
      <div className="basket">
        <Header screenWidth={screenWidth} names={names} namesForLargeScreeen={namesForLargeScreeen} />
        <StoreCoinList tasks={tasks} />
      </div>
    );
  } return null;
}
