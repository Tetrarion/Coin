import React from 'react';
import fixed from '../../utilities/fixed';

export default function HeaderBlocks({ currentCoins }) {
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
          $
          {fixed(coin.priceUsd)}
        </div>
      </div>
    ))
  );
}
