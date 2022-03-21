import React from 'react';
import { useDispatch } from 'react-redux';
import fixed from '../../../utilities/fixed';
import * as actions from '../../../Store/actions';
import { Button } from '../../../components/Button/Button';

export function Coin({ task }) {
  const {
    id, name, symbol, count, price, coinTotalPrice,
  } = task;

  const dispatch = useDispatch();

  return (
    <div className="coin" id={id}>
      <div className="coin__purchase-info">
        {name}
      </div>
      <div className="coin__purchase-info">
        {count}
      </div>
      <div className="coin__purchase-info">
        {symbol}
        {' '}
        {fixed(price)}
      </div>
      <div className="coin__purchase-info">
        {symbol}
        {' '}
        {fixed(coinTotalPrice)}
      </div>
      <div className="coin__purchase-info">
        <Button type="remove" text="Remove" func={() => dispatch(actions.removeCoin(id))} />
      </div>
    </div>
  );
}
