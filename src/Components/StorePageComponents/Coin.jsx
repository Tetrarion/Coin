import React from 'react';
import { useDispatch } from 'react-redux';
import fixed from '../../Functions/fixed';
import * as actions from '../../Store/actions';

function Coin({ task }) {
  const {
    id, name, count, priceUsd,
  } = task;

  const totalPrice = Number(priceUsd * count);

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
        $
        {fixed(priceUsd)}
      </div>
      <div className="coin__purchase-info">
        $
        {fixed(totalPrice)}
      </div>
      <div className="coin__purchase-info">
        <button className="form-button form-button--color--red" onClick={() => dispatch(actions.removeCoin(id))} tabIndex={0} onKeyDown={() => dispatch(actions.removeCoin(id))}>Remove</button>
      </div>
    </div>
  );
}

export default Coin;
