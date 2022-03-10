import React from 'react';
import { useDispatch } from 'react-redux';
import fixed from '../../utilities/fixed';
import * as actions from '../../Store/actions';

function Coin({ task }) {
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
        <button className="coin__button" onClick={() => dispatch(actions.removeCoin(id))} tabIndex={0} onKeyDown={() => dispatch(actions.removeCoin(id))}>
          <div className="coin__button-text">
            Remove
          </div>
        </button>
      </div>
    </div>
  );
}

export default Coin;
