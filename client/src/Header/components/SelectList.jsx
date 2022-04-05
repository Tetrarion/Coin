import React from 'react';

export function SelectList({ func, names }) {
  return (
    <div className="select">
      <input className="select__input" type="text" onChange={(event) => func(event.target.value)} name="city" list="ratesList" />
      <datalist className="select__list" id="ratesList">
        {
            names.map((element) => (
              <option className="select__list-item" key={element.id} value={element.id}>
                {element.id}
                {' '}
                {element.symbol}
              </option>
            ))
          }
      </datalist>
    </div>
  );
}
