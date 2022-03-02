import React from 'react';

function Select({ chooseValue }) {
  return (
    <div className="select">
      <select className="select__list" onChange={chooseValue}>
        <option className="select__list-item" value="">--Please choose an interval--</option>
        <option className="select__list-item" value="m1">1 minute</option>
        <option className="select__list-item" value="m15">15 minute</option>
        <option className="select__list-item" value="h1">1 hour</option>
        <option className="select__list-item" value="h6">6 hours</option>
        <option className="select__list-item" value="h12">12 hours</option>
        <option className="select__list-item" value="d1">1 day</option>
      </select>
    </div>
  );
}

export default Select;
