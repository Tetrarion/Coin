import React from 'react';

function Select({ chooseValue }) {
  return (
    <select className="info-page__select" onClick={chooseValue}>
      <option className="info-page__select-item" value="m1">1 minute</option>
      <option className="info-page__select-item" value="m15">15 minute</option>
      <option className="info-page__select-item" value="h1">1 hour</option>
      <option className="info-page__select-item" value="h6">6 hours</option>
      <option className="info-page__select-item" value="h12">12 hours</option>
      <option className="info-page__select-item" value="d1">1 day</option>
    </select>
  );
}

export default Select;
