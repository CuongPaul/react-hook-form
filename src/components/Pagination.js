import React from 'react';

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage,
  handleChangePage,
}) => {
  const pageNumbers = [];
  const oldestPageNumber = 1;
  const latestPageNumber = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= latestPageNumber; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {latestPageNumber > 1 && (
          <li>
            <a onClick={() => handleChangePage(oldestPageNumber)}>&lt;&lt;</a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className={`${currentPage == number && 'active'}`}>
            <a onClick={() => handleChangePage(number)}>{number}</a>
          </li>
        ))}
        {latestPageNumber > 1 && (
          <li>
            <a onClick={() => handleChangePage(latestPageNumber)}>&gt;&gt;</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
