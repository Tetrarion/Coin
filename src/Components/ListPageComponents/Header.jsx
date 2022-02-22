import React from 'react';

export default function Header() {
  return (
    <ul className="list-page__top">
      <li className="list-page__top-item">
        Rank
      </li>
      <li className="list-page__top-item">
        Name
      </li>
      <li className="list-page__top-item">
        Price
      </li>
      <li className="list-page__top-item-sm">
        MarketCap
      </li>
      <li className="list-page__top-item-sm">
        wap (24Hr)
      </li>
      <li className="list-page__top-item-sm">
        Supply
      </li>
      <li className="list-page__top-item-sm">
        Volume (24Hr)
      </li>
      <li className="list-page__top-item">
        Change (24Hr)
      </li>
    </ul>
  );
}
