import React from 'react';

export function Input({ errorMessage, showValue, hidden }) {
  return (
    <div className="input">
      <input className="input__bar" type="number" onChange={(e) => showValue(e.target.valueAsNumber)} />
      <div className="input__error-text" hidden={hidden}>
        {errorMessage}
      </div>
    </div>
  );
}
