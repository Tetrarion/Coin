/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import forwardImage from '../../../images/271228.png';
import backwardImage from '../../../images/32542.png';

export function Pagination({
  totalPages, visiblePagesFromCurrentPage, visiblePagesFromThеEdges, pagination,
}) {
  const [visiblePages, setVisiblePages] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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

  const showPagination = (newArray) => {
    if (currentPage < visiblePagesFromThеEdges) {
      newArray.splice(visiblePagesFromThеEdges, newArray.length - (visiblePagesFromThеEdges + 1), '....');
    } else if (currentPage > newArray.length - (visiblePagesFromThеEdges - 1)) {
      newArray.splice(1, newArray.length - (visiblePagesFromThеEdges + 1), '....');
    } else if (currentPage < totalPages / 2) {
      if (currentPage - visiblePagesFromCurrentPage <= 2) {
        newArray.splice(
          currentPage + visiblePagesFromCurrentPage,
          newArray.length - (visiblePagesFromCurrentPage + (currentPage + 1)),
          '....',
        );
      } else {
        newArray.splice(
          currentPage + visiblePagesFromCurrentPage,
          newArray.length - (visiblePagesFromCurrentPage + (currentPage + 1)),
          '....',
        );
        newArray.splice(1, currentPage - (visiblePagesFromCurrentPage + 2), '...');
      }
    } else if (currentPage > totalPages / 2) {
      if (currentPage + visiblePagesFromCurrentPage > totalPages - 2) {
        newArray.splice(1, currentPage - (visiblePagesFromCurrentPage + 2), '....');
      } else {
        newArray.splice(
          currentPage + visiblePagesFromCurrentPage,
          newArray.length - (visiblePagesFromCurrentPage + (currentPage + 1)),
          '...',
        );
        newArray.splice(1, currentPage - (visiblePagesFromCurrentPage + 2), '....');
      }
    }
    setVisiblePages(newArray);
  };

  useEffect(() => {
    if (currentPage === '...' || currentPage === '....') return;
    const newArray = pages.slice();
    pagination(currentPage);
    if (totalPages <= visiblePagesFromThеEdges + 1) setVisiblePages(newArray);
    else showPagination(newArray);
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
                            onClick={() => setCurrentPage(pageNumber)}
                            onKeyDown={() => setCurrentPage(pageNumber)}
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
