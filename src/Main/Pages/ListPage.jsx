import React, { useEffect, useState } from 'react';
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from '../../Components/ListPageComponents/Header';
import Pagination from '../../Components/ListPageComponents/Pagination';
// import { sortCoins } from '../../utilities/sortCoins';
import Select from '../../Components/ListPageComponents/Select';
import SearchBar from '../../Components/ListPageComponents/SearchBar';
import getInfo from '../../API/api';

function ListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins] = useState(2000);
  const [time, setTime] = useState(0);
  // const [sortedCoins, setSortedCoins] = useState([]);
  // const [sortName, setSortName] = useState('');
  // const [searchText, setSearchText] = useState('');
  // const [cryptocurrency, setCryptocurrency] = useState([]);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  // const sort = (name) => setSortName(name);

  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;

  useEffect(() => {
    const update = () => {
      setTime((prevTime) => prevTime + 1);
      setTimeout(update, 10000);
    };
    update();
  }, []);

  useEffect(() => {
    const getCoins = async () => {
      const response = await getInfo(`?offset=${firstCoinsIndex}&limit=${coinsPerPage}`);
      setCurrentCoins(response);
    };
    getCoins();
  }, [firstCoinsIndex, coinsPerPage, time]);

  // useEffect(() => {
  //   if (searchText.length !== 0) return;
  //   setSortedCoins(sortCoins(sortName, cryptocurrency));
  // }, [sortName, searchText, cryptocurrency]);

  // const search = (text) => {
  //   setSearchText(text);
  //   const searchArray = [];
  //   // eslint-disable-next-line array-callback-return
  //   cryptocurrency.map((coin) => {
  //     const name = coin.name.substr(0, text.length);
  //     if (name.toLowerCase() === text.toLowerCase()) {
  //       searchArray.push(coin);
  //     }
  //   });
  //   setCurrentPage(1);
  //   setSortedCoins(searchArray);
  // };

  return (
    <div className="list-page">
      <SearchBar />
      <Select />
      <Header />
      <CoinBlock coins={currentCoins} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={totalCoins} pagination={pagination} />
    </div>

  );
}

export default ListPage;
