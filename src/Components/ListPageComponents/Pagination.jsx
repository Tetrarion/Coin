import React, { useEffect, useState } from 'react';

const forwardImage = require('../../images/271228.png');
const backwardImage = require('../../images/32542.png');

function Pagination({ coinsPerPage, totalCoins, pagination }) {
  const [visiblePages, setVisiblePages] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageArray = [];
    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i += 1) {
      pageArray.push(i);
    }
    setPageNumbers(pageArray);
  }, [coinsPerPage, totalCoins]);

  const increase = () => {
    if (currentPage < Math.ceil(totalCoins / coinsPerPage)) setCurrentPage(currentPage + 1);
  };

  const decrease = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage === '...' || currentPage === '....') return;
    const newArray = pageNumbers.slice();
    pagination(currentPage);
    if (currentPage < 6) {
      newArray.splice(6, newArray.length - 7, '....');
    } else if (currentPage > newArray.length - 5) {
      newArray.splice(1, newArray.length - 7, '....');
    } else {
      const previousPage = currentPage - 1;
      const secondPage = currentPage + 1;
      if (currentPage < Math.ceil(totalCoins / coinsPerPage) / 2) {
        newArray.splice(secondPage, newArray.length - (secondPage + 1), '....');
        newArray.splice(1, previousPage - 2, '...');
      } else {
        newArray.splice(secondPage, newArray.length - (secondPage + 1), '...');
        newArray.splice(1, previousPage - 2, '....');
      }
    }
    setVisiblePages(newArray);
  }, [currentPage, pageNumbers]);

  if (pageNumbers.length < 2) return null;
  console.log(pageNumbers.length);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <div className="page-forward" onClick={decrease} onKeyDown={decrease} role="button" tabIndex={0}>
          <img className="page-forward__image" src={backwardImage} alt="page-forward__image" />
        </div>
        {
                    visiblePages.map((pageNumber) => {
                      if (pageNumber !== currentPage) {
                        return (
                          <li
                            className="pagination__list-item"
                            key={pageNumber}
                            onClick={() => {
                              setCurrentPage(pageNumber);
                            }}
                            onKeyDown={() => {
                              setCurrentPage(pageNumber);
                            }}
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                            role="button"
                            tabIndex={0}
                          >
                            {pageNumber}
                          </li>
                        );
                      } return (
                        <li
                          className="pagination__list-item pagination__list-item--selected"
                          key={pageNumber}
                        >
                          {pageNumber}
                        </li>
                      );
                    })
                }
        <div className="page-backward" onClick={increase} onKeyDown={increase} role="button" tabIndex={0}>
          <img className="page-backward__image" src={forwardImage} alt="page-backward__image" />
        </div>
      </ul>
    </div>
  );
}

export default Pagination;
