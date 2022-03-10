import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../Store/actions';

export default function Form({ id, rateId }) {
  const [inputValue, setInputValue] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(document.querySelector('.message'));
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="form">
      <input className="form__input" type="number" onChange={(e) => setInputValue(e.target.valueAsNumber)} />
      <button className="form__button" onClick={() => dispatch(actions.loadCoin(id, inputValue, message, rateId))}>
        <div className="form__button-text">Add to basket</div>
      </button>
    </div>
  );
}
