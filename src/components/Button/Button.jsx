import React from 'react';
import './button.css';

export function Button({ text, func }) {
  return (
    <button className="button" onClick={func}>
      <div className="button__text">{text}</div>
    </button>
  );
}
