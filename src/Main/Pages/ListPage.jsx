import React, { useEffect, useState } from 'react';
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from '../../Components/ListPageComponents/Header';
import Pagination from '../../Components/ListPageComponents/Pagination';
import { sortCoins } from '../../utilities/sortCoins';
import Select from '../../Components/ListPageComponents/Select';
import SearchBar from '../../Components/ListPageComponents/SearchBar';

function ListPage({ coins, loading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(12);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(0);
  const [sortedCoins, setSortedCoins] = useState([]);
  const [sortName, setSortName] = useState('');
  const [searchText, setSearchText] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState([]);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  const sort = (name) => setSortName(name);

  const lastCoinsIndex = currentPage * coinsPerPage;
  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;

  useEffect(() => {
    setSortedCoins(coins);
  }, [loading]);

  useEffect(() => {
    setCryptocurrency(coins);
  }, [coins]);

  useEffect(() => {
    if (searchText.length !== 0) return;
    setSortedCoins(sortCoins(sortName, cryptocurrency));
  }, [sortName, searchText, cryptocurrency]);

  useEffect(() => {
    setCurrentCoins(sortedCoins.slice(firstCoinsIndex, lastCoinsIndex));
    setTotalCoins(sortedCoins.length);
  }, [currentPage, sortedCoins]);

  const search = (text) => {
    setSearchText(text);
    const searchArray = [];
    // eslint-disable-next-line array-callback-return
    cryptocurrency.map((coin) => {
      const name = coin.name.substr(0, text.length);
      if (name.toLowerCase() === text.toLowerCase()) {
        searchArray.push(coin);
      }
    });
    setCurrentPage(1);
    setSortedCoins(searchArray);
  };

  return (
    <div className="list-page">
      <SearchBar search={search} />
      <Select sortName={sort} />
      <Header />
      <CoinBlock coins={currentCoins} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={totalCoins} pagination={pagination} />
    </div>

  );
}

export default ListPage;
