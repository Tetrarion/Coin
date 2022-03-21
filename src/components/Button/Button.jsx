import React from 'react';
import './button.css';

export function Button({ type, text, func }) {
  return (
    <button className={`button button--${type}`} onClick={func}>
      <div className="button__text">{text}</div>
    </button>
  );
}
