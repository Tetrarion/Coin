import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import History from '../../Components/InfoPageComponents/History';
import Information from '../../Components/InfoPageComponents/Information';
import Select from '../../Components/InfoPageComponents/Select';
import Form from '../../Components/InfoPageComponents/Form';

export default function InfoPage() {
  const [choosedValue, setChoosedValue] = useState('m1');

  const params = useParams();
  const prodId = params.id;

  return (
    <div className="info-page">
      <Information id={prodId} />
      <Select chooseValue={(e) => setChoosedValue(e.target.value)} />
      <History id={prodId} choosedValue={choosedValue} />
      <Form id={prodId} />
    </div>
  );
}
