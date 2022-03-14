import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../Store/actions';

export default function Form({
  id, rateId, priceUsd, symbol,
}) {
  const [inputValue, setInputValue] = useState(0);
  const [message, setMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');

  useEffect(() => {
    setMessage(document.querySelector('.message'));
  }, []);

  const showTotalPrice = (e) => {
    setInputValue(e.target.valueAsNumber);
    if (Number.isNaN(e.target.valueAsNumber * priceUsd)) {
      setTotalPrice('');
      setCurrencySymbol('');
    } else {
      setTotalPrice(e.target.valueAsNumber * priceUsd);
      setCurrencySymbol(symbol);
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="form">
      <input className="form__input" type="number" onChange={(e) => showTotalPrice(e)} />
      <button className="form__button" onClick={() => dispatch(actions.loadCoin(id, inputValue, message, rateId))}>
        <div className="form__button-text">Add to basket</div>
      </button>
      <div className="form__text">
        {currencySymbol}
        {' '}
        {totalPrice}
      </div>
    </div>
  );
}
