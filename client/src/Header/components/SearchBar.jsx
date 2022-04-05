import React, { useState } from 'react';
import loopImage from '../../images/3641364.png';

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
      <div className="search__image-container" onClick={showSearchBar} onKeyDown={showSearchBar} role="button" tabIndex={0}>
        <img className="search__image" src={loopImage} alt="loop__image" />
      </div>
      <input
        className={className}
        type="text"
        placeholder="Search bar"
        onInput={(event) => search(event.target.value)}
        onBlur={(event) => hiddenSearchBar(event.target.value)}
      />
    </div>
  );
}
