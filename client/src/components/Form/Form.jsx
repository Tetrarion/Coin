import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../Store/actions';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export function Form({
  id, rateId, priceUsd, symbol,
}) {
  const [inputValue, setInputValue] = useState(0);
  const [message, setMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  const [errorMessage, setErroMessage] = useState('');
  const [hidden, setHidden] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setMessage(document.querySelector('.message'));
  }, []);

  const showTotalPrice = (value) => {
    setInputValue(value);
    if (Number.isNaN(value * priceUsd) || hidden === false) {
      setTotalPrice('');
      setCurrencySymbol('');
    } else {
      setTotalPrice(value * priceUsd);
      setCurrencySymbol(symbol);
    }
  };

  const showErrorMessage = (text) => {
    setErroMessage(text);
    setHidden(false);
    setTimeout(() => { setHidden(true); }, 4000);
  };

  const checkForCorrect = () => {
    if (inputValue < 0) {
      showErrorMessage('You need to enter a positive number');
    } else if (!inputValue) {
      showErrorMessage('You need to enter a number');
    } else {
      setHidden(true);
      dispatch(actions.loadCoin(id, inputValue, message, rateId));
    }
  };

  return (
    <div className="form">
      <Input errorMessage={errorMessage} showValue={showTotalPrice} hidden={hidden} />
      <Button type="add" text="Add to basket" func={checkForCorrect} />
      <div className="form__text">
        {currencySymbol}
        {' '}
        {totalPrice}
      </div>
    </div>
  );
}
