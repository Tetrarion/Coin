import React from 'react';
import { Link } from 'react-router-dom';

export default function BasketButton({ totalPrice, priceDifferences, priceProcent }) {
  if (totalPrice) {
    return (
      <Link className="navigation__link" to="/storepage">
        Basket:
        {' '}
        $
        {totalPrice}
        {' '}
        {priceDifferences}
        {' '}
        (
        {priceProcent}
        %)
      </Link>
    );
  } return (
    <Link className="navigation__link" to="/storepage">
      Basket
    </Link>
  );
}
