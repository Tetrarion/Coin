import React, { useEffect, useState } from 'react';

const forwardImage = require('../../images/271228.png');
const backwardImage = require('../../images/32542.png');

function Pagination({ totalPages, pagination }) {
  const [visiblePages, setVisiblePages] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const screenWidth = window.screen.width;

  useEffect(() => {
    const pageArray = [];
    for (let i = 1; i <= totalPages; i += 1) {
      pageArray.push(i);
    }
    setPages(pageArray);
  }, [totalPages]);

  const increase = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const decrease = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const showPaginationForSmallScreen = (newArray) => {
    if (currentPage < 4) {
      newArray.splice(4, newArray.length - 5, '....');
    } else if (currentPage > newArray.length - 3) {
      newArray.splice(1, newArray.length - 5, '....');
    } else {
      const previousPage = currentPage - 1;
      const secondPage = currentPage + 1;
      if (currentPage < totalPages / 2) {
        newArray.splice(secondPage, newArray.length - (secondPage + 1), '....');
        if (currentPage > 4) newArray.splice(1, previousPage - 2, '...');
      } else {
        if (currentPage < newArray.length - 3) newArray.splice(secondPage, newArray.length - (secondPage + 1), '...');
        newArray.splice(1, previousPage - 2, '....');
      }
    }
    setVisiblePages(newArray);
  };

  const showPaginationForLargeScreen = (newArray) => {
    if (currentPage < 20) {
      newArray.splice(20, newArray.length - 21, '....');
    } else if (currentPage > newArray.length - 19) {
      newArray.splice(1, newArray.length - 21, '....');
    } else {
      const previousPage = currentPage - 8;
      const secondPage = currentPage + 8;
      if (currentPage < totalPages / 2) {
        newArray.splice(secondPage, newArray.length - (secondPage + 1), '....');
        newArray.splice(1, previousPage - 2, '...');
      } else {
        newArray.splice(secondPage, newArray.length - (secondPage + 1), '...');
        newArray.splice(1, previousPage - 2, '....');
      }
    }
    setVisiblePages(newArray);
  };

  useEffect(() => {
    if (currentPage === '...' || currentPage === '....') return;
    const newArray = pages.slice();
    pagination(currentPage);
    if (screenWidth > 960) {
      if (totalPages < 22) setVisiblePages(newArray);
      else showPaginationForLargeScreen(newArray);
    } else if (totalPages < 8) setVisiblePages(newArray);
    else showPaginationForSmallScreen(newArray);
  }, [currentPage, pages]);

  if (pages.length < 2) return null;

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <div className="pagination__changer" onClick={decrease} onKeyDown={decrease} role="button" tabIndex={0}>
          <img className="pagination__changer-image" src={backwardImage} alt="page-forward__image" />
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
        <div className="pagination__changer" onClick={increase} onKeyDown={increase} role="button" tabIndex={0}>
          <img className="pagination__changer-image" src={forwardImage} alt="page-backward__image" />
        </div>
      </ul>
    </div>
  );
}

export default Pagination;
