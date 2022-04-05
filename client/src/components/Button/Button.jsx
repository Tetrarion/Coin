import React from 'react';

export function Button({ type, text, func }) {
  return (
    <button type="button" className={`button button--${type}`} onClick={func}>
      <div className="button__text">{text}</div>
    </button>
  );
}
