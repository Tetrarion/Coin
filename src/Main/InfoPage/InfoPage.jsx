import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { History } from './components/History';
import { Information } from './components/Information';
import { Select } from '../../components/Select/Select';
import { Form } from '../../components/Form/Form';
import getHistory from '../../utilities/getHistory';

export default function InfoPage({ rate }) {
  const [choosedValue, setChoosedValue] = useState('m1');
  const [history, setHistory] = useState('');

  const params = useParams();
  const prodId = params.id;

  const names = ['m1', 'm15', 'h1', 'h6', 'h12', 'd1'];

  const chooseValue = (value) => setChoosedValue(value);

  useEffect(() => {
    async function data() {
      setHistory(await getHistory(choosedValue, prodId));
    }
    data();
  }, [choosedValue, prodId]);

  return (
    <div className="info-page">
      <Information id={prodId} rate={rate} />
      <Select func={chooseValue} names={names} />
      <History data={history} XAxisKey="date" YAxisKey="priceUsd" />
      <Form id={prodId} rateId={rate.id} />
    </div>
  );
}
