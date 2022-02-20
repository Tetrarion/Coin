import React from 'react';
import { storePageNames } from '../../Data/storePageNames';

export default function Header() {
  return (
    <div className="header-top">
      <ul className="header-top__list">
        {
                  storePageNames.map((name) => (
                    <div className="header-top__list-item">
                      {name}
                    </div>
                  ))
              }
      </ul>
    </div>
  );
}
