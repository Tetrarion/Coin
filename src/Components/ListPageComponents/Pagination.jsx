import React, { useState } from 'react';

function Pagination({ coinsPerPage, totalCoins, pagination }) {
  const [prevElement, setPrevElement] = useState('');

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const selected = (pageNamber, event) => {
    pagination(pageNamber);
    if (prevElement === '') {
      event.target.classList.add('pagination__list-item--selected');
    } else {
      prevElement.classList.remove('pagination__list-item--selected');
      event.target.classList.add('pagination__list-item--selected');
    }
    setPrevElement(event.target);
  };

  if (pageNumbers.length === 1) return null;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
                    pageNumbers.map((pageNamber) => (
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                      <li className="pagination__list-item" key={pageNamber} onClick={(event) => selected(pageNamber, event)} onKeyDown={(event) => selected(pageNamber, event)} role="button" tabIndex={0}>
                        {pageNamber}
                      </li>
                    ))
                }
      </ul>
    </div>
  );
}

export default Pagination;
