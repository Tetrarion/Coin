import React from 'react';
import fixed from '../../utilities/fixed';

export default function HeaderBlocks({ currentCoins, rate }) {
  return (
    currentCoins.map((coin) => (
      <div className="popular-coins__info" key={coin.id}>
        <div className="popular-coins__info-name">
          №
          {coin.rank}
          {' '}
          {coin.name}
        </div>
        <div className="popular-coins__info-price">
          {rate.symbol}
          {' '}
          {fixed(coin.priceUsd / rate.value)}
        </div>
      </div>
    ))
  );
}
