import React from 'react';
import { storePageNames } from '../../../Data/storePageNames';

export function Header({ tasks }) {
  if (tasks.length) {
    return (
      <ul className="top">
        <div className="top__list">
          {
                  storePageNames.map((name) => (
                    <div className="top__list-item-basket">
                      {name}
                    </div>
                  ))
              }
        </div>
      </ul>
    );
  } return null;
}
