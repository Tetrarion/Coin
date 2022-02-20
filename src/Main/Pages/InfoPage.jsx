import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import History from '../../Components/InfoPageComponents/History';
import Information from '../../Components/InfoPageComponents/Information';
import handleCoinSubmit from '../../Functions/handleCoinSubmit';

export default function InfoPage({ coins }) {
  const [info, SetInfo] = useState('');

  const dispatch = useDispatch();

  const params = useParams();
  const prodId = params.id;

  const getInformation = () => {
    const coininf = coins.find((coin) => coin.id === prodId);
    SetInfo(coininf);
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <div className="info-page">
      <Information
        coininf={info}
      />
      <History prodId={prodId} />
      <div className="info-page__form">
        <input className="info-page__form-input" type="number" />
        <button className="form-button form-button--color--green" onClick={(event) => { handleCoinSubmit(prodId, dispatch, event.target.parentElement); }}>Add to basket</button>
      </div>
    </div>
  );
}
