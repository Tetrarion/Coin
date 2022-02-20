import React from 'react';

function Pagination({ coinsPerPage, totalCoins, pagination }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const selected = (number, event) => {
    pagination(number);
    const selectedBlock = document.querySelector('.pagination__list-item--selected');
    if (selectedBlock) {
      selectedBlock.classList.remove('pagination__list-item--selected');
    }
    event.currentTarget.classList.add('pagination__list-item--selected');
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
                    pageNumbers.map((number) => (
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                      <li className="pagination__list-item" key={number} onClick={(event) => selected(number, event)} onKeyDown={(event) => selected(number, event)} role="button" tabIndex={0}>
                        {number}
                      </li>
                    ))
                }
      </ul>
    </div>
  );
}

export default Pagination;
