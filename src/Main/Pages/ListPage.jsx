import React, { useEffect, useState } from 'react';
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from '../../Components/ListPageComponents/Header';
import Pagination from '../../Components/ListPageComponents/Pagination';
import { sortCoins } from '../../utilities/sortCoins';
import Search from '../../Components/ListPageComponents/Search';

function ListPage({ coins, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(12);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(0);
  const [array, setArray] = useState(coins);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  const lastCoinsIndex = currentPage * coinsPerPage;
  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;

  useEffect(() => {
    setArray(coins);
  }, [loading]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    setCurrentCoins(array.slice(firstCoinsIndex, lastCoinsIndex));
    setTotalCoins(array.length);
  }, [firstCoinsIndex, lastCoinsIndex, array]);

  const search = (text) => {
    const searchCoins = [];
    // eslint-disable-next-line array-callback-return
    coins.map((coin) => {
      const name = coin.name.substr(0, text.length);
      if (name.toLowerCase() === text.toLowerCase()) {
        searchCoins.push(coin);
      }
    });
    setCurrentPage(1);
    setArray(searchCoins);
    setTotalCoins(searchCoins.length);
  };

  const sortName = (name) => {
    setArray(sortCoins(name, coins));
  };

  return (
    <div className="list-page">
      <input className="search-line" type="text" onChange={(event) => search(event.target.value)} />
      <Search sortName={sortName} />
      <Header />
      <CoinBlock coins={currentCoins} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={totalCoins} pagination={pagination} />
    </div>

  );
}

export default ListPage;
