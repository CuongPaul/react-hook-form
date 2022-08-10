import React, { useState } from 'react';

import Pagination from './Pagination';

export const Table = ({
  data = [],
  heading = [],
  loading = true,
  itemsPerPage = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div>
        <div>
          <div>
            {heading.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          {currentData.map((item, index) => {
            const keys = Object.keys(item);
            return (
              <div key={index}>
                {keys.map((key, indexKey) => (
                  <span key={indexKey}>
                    {item[key].toString().replace('-', ' ')}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
        <Pagination
          totalItems={data.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handleChangePage={handleChangePage}
        />
      </div>
    );
  }
};
