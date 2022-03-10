import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import History from '../../Components/InfoPageComponents/History';
import Information from '../../Components/InfoPageComponents/Information';
import Select from '../../Components/ListPageComponents/Select';
import Form from '../../Components/InfoPageComponents/Form';

export default function InfoPage({ rate }) {
  const [choosedValue, setChoosedValue] = useState('m1');

  const params = useParams();
  const prodId = params.id;

  const chooseValue = (value) => setChoosedValue(value);

  const names = ['m1', 'm15', 'h1', 'h6', 'h12', 'd1'];

  return (
    <div className="info-page">
      <Information id={prodId} rate={rate} />
      <Select func={chooseValue} names={names} />
      <History id={prodId} choosedValue={choosedValue} />
      <Form id={prodId} rateId={rate.id} />
    </div>
  );
}
