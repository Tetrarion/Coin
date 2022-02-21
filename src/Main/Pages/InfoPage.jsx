import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import History from '../../Components/InfoPageComponents/History';
import Information from '../../Components/InfoPageComponents/Information';
import handleCoinSubmit from '../../Functions/handleCoinSubmit';
import { getInfo } from '../../API/api';

export default function InfoPage() {
  const [info, SetInfo] = useState('');
  const [choosedValue, setChoosedValue] = useState('');

  const dispatch = useDispatch();

  const params = useParams();
  const prodId = params.id;

  const getInformation = async () => {
    SetInfo(await getInfo(`assets/${prodId}`));
  };

  const chooseValue = (event) => {
    setChoosedValue(event.target.value);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <div className="info-page">
      <Information
        coininf={info}
      />
      <select className="info-page__select" onClick={(event) => chooseValue(event)}>
        <option className="info-page__select-item" value="m1">1 minute</option>
        <option className="info-page__select-item" value="m15">15 minute</option>
        <option className="info-page__select-item" value="h1">1 hour</option>
        <option className="info-page__select-item" value="h6">6 hours</option>
        <option className="info-page__select-item" value="h12">12 hours</option>
        <option className="info-page__select-item" value="d1">1 day</option>
      </select>
      <History id={prodId} choosedValue={choosedValue} />
      <div className="info-page__form">
        <input className="info-page__form-input" type="number" />
        <button className="form-button form-button--color--green" onClick={(event) => { handleCoinSubmit(prodId, dispatch, event.target.parentElement); }}>Add to basket</button>
      </div>
    </div>
  );
}
