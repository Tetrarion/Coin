import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import History from '../../Components/InfoPageComponents/History';
import Information from '../../Components/InfoPageComponents/Information';
import { loadCoin } from '../../Functions/loadCoin';
import Select from '../../Components/InfoPageComponents/Select';

export default function InfoPage() {
  const [choosedValue, setChoosedValue] = useState('');

  const params = useParams();
  const prodId = params.id;

  const dispatch = useDispatch();

  const chooseValue = (value) => {
    setChoosedValue(value);
  };

  return (
    <div className="info-page">
      <Information
        id={prodId}
      />
      <Select chooseValue={(e) => chooseValue(e.target.value)} />
      <History id={prodId} choosedValue={choosedValue} />
      <div className="info-page__form">
        <input className="info-page__form-input" type="number" />
        <button className="form-button form-button--color--green" onClick={(event) => dispatch(loadCoin(prodId, event.target.parentElement))}>Add to basket</button>
      </div>
    </div>
  );
}
