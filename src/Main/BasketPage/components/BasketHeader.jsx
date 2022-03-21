import React from 'react';

export function Header({ tasks, names }) {
  if (tasks.length) {
    return (
      <div className="top">
        <ul className="top__list">
          {
                  names.map((name) => (
                    <div className="top__list-item-basket" key={name}>
                      {name}
                    </div>
                  ))
              }
        </ul>
      </div>
    );
  } return null;
}
