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
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(2000);
  const [time, setTime] = useState(0);
  const [totalPages, setTotalPages] = useState(200);
  // const [sortedCoins, setSortedCoins] = useState([]);
  // const [sortName, setSortName] = useState('');
  const [searchText, setSearchText] = useState('');
  // const [cryptocurrency, setCryptocurrency] = useState([]);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  // const sort = (name) => setSortName(name);

  useEffect(() => {
    const update = () => {
      setTime((prevTime) => prevTime + 1);
      setTimeout(update, 10000);
    };
    update();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(totalCoins / coinsPerPage));
  }, [totalCoins, coinsPerPage]);

  useEffect(() => {
    const getCoins = async () => {
      const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
      let response;
      if (searchText.length !== 0) {
        const responseCount = await getInfo(`?search=${searchText}&limit=2000`);
        response = await getInfo(`?offset=${firstCoinsIndex}&limit=${coinsPerPage}&search=${searchText}`);
        setTotalCoins(responseCount.length);
      } else {
        response = await getInfo(`?offset=${firstCoinsIndex}&limit=${coinsPerPage}`);
        setTotalCoins(2000);
      }
      setCurrentCoins(response);
    };
    getCoins();
  }, [coinsPerPage, time, currentPage, searchText]);

  const takeCoinsPerPage = (number) => setCoinsPerPage(number);

  const names = [10, 12, 15, 17, 20];

  // useEffect(() => {
  //   if (searchText.length !== 0) return;
  //   setSortedCoins(sortCoins(sortName, cryptocurrency));
  // }, [sortName, searchText, cryptocurrency]);

  const search = (text) => {
    setSearchText(text);
  };

  return (
    <div className="list-page">
      <SearchBar search={search} />
      <Select func={takeCoinsPerPage} names={names} />
      <Header />
      <CoinBlock coins={currentCoins} />
      <Pagination totalPages={totalPages} pagination={pagination} />
    </div>

  );
}

export default ListPage;
