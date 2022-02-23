import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from '../../Components/ListPageComponents/Header';
import Pagination from '../../Components/ListPageComponents/Pagination';
import { loadCoin } from '../../Functions/loadCoin';
import showInputForCount from '../../Functions/showInputForCount';

function ListPage({ coins, tasks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(18);

  const dispatch = useDispatch();

  const lastCoinsIndex = currentPage * coinsPerPage;
  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
  const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  return (
    <div className="list-page">
      <Header tasks={tasks} />
      <CoinBlock
        coins={currentCoins}
        // eslint-disable-next-line max-len
        handleCoinSubmit={(e) => dispatch(loadCoin(e.target.parentElement.parentElement.id, e.target.parentElement))}
        showInputForCount={(event) => showInputForCount(event)}
      />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} pagination={pagination} />
    </div>

  );
}

export default ListPage;
