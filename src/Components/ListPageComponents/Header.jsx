import React from 'react';

export default function Header() {
  return (
    <div className="header-top">
      <ul className="header-top__specifications">
        <li className="header-top__specifications-item">
          Rank
        </li>
        <li className="header-top__specifications-item">
          Name
        </li>
        <li className="header-top__specifications-item">
          Price
        </li>
        <li className="header-top__specifications-item header-top__specifications-item--sm--none">
          MarketCap
        </li>
        <li className="header-top__specifications-item header-top__specifications-item--sm--none">
          wap (24Hr)
        </li>
        <li className="header-top__specifications-item header-top__specifications-item--sm--none">
          Supply
        </li>
        <li className="header-top__specifications-item header-top__specifications-item--sm--none">
          Volume (24Hr)
        </li>
        <li className="header-top__specifications-item">
          Change (24Hr)
        </li>
      </ul>
    </div>
  );
}
