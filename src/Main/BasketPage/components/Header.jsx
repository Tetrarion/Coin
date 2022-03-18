import React from 'react';
import { storePageNames } from '../../../Data/storePageNames';

export function Header({ tasks }) {
  if (tasks.length) {
    return (
      <div className="top">
        <ul className="top__list">
          {
                  storePageNames.map((name) => (
                    <div className="top__list-item-basket">
                      {name}
                    </div>
                  ))
              }
        </ul>
      </div>
    );
  } return null;
}
