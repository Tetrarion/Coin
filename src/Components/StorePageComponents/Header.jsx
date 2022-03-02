import React from 'react';
import { storePageNames } from '../../Data/storePageNames';

export default function Header({ tasks }) {
  if (tasks.length) {
    return (
      <ul className="basket__top">
        {
                  storePageNames.map((name) => (
                    <div className="basket__top-item">
                      {name}
                    </div>
                  ))
              }
      </ul>
    );
  } return null;
}
