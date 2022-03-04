import React, { useEffect, useState } from 'react';

function Pagination({ coinsPerPage, totalCoins, pagination }) {
  const [prevElement, setPrevElement] = useState('');
  const [visiblePages, setVisiblePages] = useState([]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    pageNumbers.splice(3, pageNumbers.length - 4, '...');
    setVisiblePages(pageNumbers);
  }, []);

  const select = (event, pageNumber) => {
    if (pageNumber === '...') return;
    if (prevElement === '') {
      event.target.classList.add('pagination__list-item--selected');
    } else {
      console.log(pageNumber);
      console.log(event.target);
      prevElement.classList.remove('pagination__list-item--selected');
      event.target.classList.add('pagination__list-item--selected');
    }
    setPrevElement(event.target);
  };

  const changeVisibleCoins = (pageNumber) => {
    if (pageNumber === '...') return;
    pagination(pageNumber);
    if (pageNumber === 1 || pageNumber === 2) {
      pageNumbers.splice(3, pageNumbers.length - 4, '...');
      setVisiblePages(pageNumbers);
    } else if (pageNumber === pageNumbers.length || pageNumber === pageNumbers.length - 1) {
      pageNumbers.splice(1, pageNumbers.length - 4, '...');
      setVisiblePages(pageNumbers);
    } else {
      const previousPage = pageNumber - 1;
      const secondPage = pageNumber + 1;
      pageNumbers.splice(secondPage, pageNumbers.length - (secondPage + 1), '...');
      pageNumbers.splice(1, previousPage - 2, '...');
      setVisiblePages(pageNumbers);
    }
  };

  if (pageNumbers.length === 1) return null;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
                    visiblePages.map((pageNumber, index) => (
                      <li
                        className="pagination__list-item"
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={(event) => {
                          select(event, pageNumber);
                          changeVisibleCoins(pageNumber);
                        }}
                        onKeyDown={(event) => {
                          select(event);
                          changeVisibleCoins(pageNumber);
                        }}
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                        role="button"
                        tabIndex={0}
                      >
                        {pageNumber}
                      </li>
                    ))
                }
      </ul>
    </div>
  );
}

export default Pagination;
