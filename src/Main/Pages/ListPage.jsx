import React, { useState } from 'react';
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from '../../Components/ListPageComponents/Header';
import Pagination from '../../Components/ListPageComponents/Pagination';

function ListPage({ coins, tasks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(18);

  const lastCoinsIndex = currentPage * coinsPerPage;
  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
  const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  return (
    <div className="list-page">
      <Header tasks={tasks} />
      <CoinBlock coins={currentCoins} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} pagination={pagination} />
    </div>

  );
}

export default ListPage;
