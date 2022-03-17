import React, { useState } from 'react';
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
const loopImage = require('../../images/3641364.png');

export function SearchBar({ search }) {
  const [className, setClassName] = useState('search__bar');

  const showSearchBar = () => {
    setClassName('search__bar search__bar--active');
  };

  const hiddenSearchBar = (text) => {
    if (text.length) return;
    setClassName('search__bar');
  };

  return (
    <div className="search">
      <img className="search__img" src={loopImage} alt="loop__image" onClick={showSearchBar} onKeyDown={showSearchBar} role="button" tabIndex={0} />
      <input className={className} type="text" placeholder="Search bar" onChange={(event) => search(event.target.value)} onBlur={(event) => hiddenSearchBar(event.target.value)} />
    </div>
  );
}
