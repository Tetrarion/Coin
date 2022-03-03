import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../Store/actions';

export default function Form({ id }) {
  const [inputValue, setInputValue] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(document.querySelector('.message'));
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="info-page__form">
      <input className="info-page__form-input" type="number" onChange={(e) => setInputValue(e.target.valueAsNumber)} />
      <button className="form-button form-button--color--green" onClick={() => dispatch(actions.loadCoin(id, inputValue, message))}>
        <div className="form-button__text">Add to basket</div>
      </button>
    </div>
  );
}
