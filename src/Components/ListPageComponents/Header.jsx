/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';

const upArrowImage = require('../../images/down--v2.png');
const downArrowImage = require('../../images/down--v1.png');

export default function Header({ sort }) {
  const [prevElement, setPrevElement] = useState('');

  const showImage = (element) => {
    sort(element.id);
    if (element !== prevElement && prevElement !== '') prevElement.lastChild.classList.add('top__list-item-img--hidden');
    setPrevElement(element);
    if (element.lastChild.classList.contains('top__list-item-img--hidden')) element.lastChild.classList.remove('top__list-item-img--hidden');
    if (element.id === `${element.getAttribute('name')} up`) {
      element.setAttribute('id', `${element.getAttribute('name')} down`);
      element.lastChild.setAttribute('src', upArrowImage);
    } else {
      element.setAttribute('id', `${element.getAttribute('name')} up`);
      element.lastChild.setAttribute('src', downArrowImage);
    }
  };

  return (
    <ul className="top" onClick={(event) => showImage(event.target)} onKeyDown={(event) => sort(event.target.text)} role="button" tabIndex={0}>
      <div className="top__list">
        <li className="top__list-item" id="Rank" name="Rank">
          Rank
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" alt="item-img" />
        </li>
        <li className="top__list-item" id="Name" name="Name">
          Name
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
        <li className="top__list-item" id="Price" name="Price">
          Price
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
        <li className="top__list-item-sm" id="MarketCap" name="MarketCap">
          MarketCap
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
        <li className="top__list-item-sm" id="wap (24Hr)" name="wap (24Hr)">
          wap (24Hr)
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
        <li className="top__list-item-sm" id="Supply" name="Supply">
          Supply
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
        <li className="top__list-item-sm" id="Volume (24Hr)" name="Volume (24Hr)">
          Volume (24Hr)
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
        <li className="top__list-item" id="Change (24Hr)" name="Change (24Hr)">
          Change (24Hr)
          {' '}
          <img className="top__list-item-img top__list-item-img--hidden" src="" alt="item-img" />
        </li>
      </div>
    </ul>
  );
}
