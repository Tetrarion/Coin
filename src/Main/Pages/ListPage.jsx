import React, { useEffect, useState } from 'react';
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from '../../Components/ListPageComponents/Header';
import Pagination from '../../Components/ListPageComponents/Pagination';
import getInfo from '../../API/api';

function ListPage({ searchText, coinsPerPage, rate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(2000);
  const [time, setTime] = useState(0);
  const [totalPages, setTotalPages] = useState(200);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

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
        const responseCount = await getInfo(`assets/?search=${searchText}&limit=2000`);
        response = await getInfo(`assets/?offset=${firstCoinsIndex}&limit=${coinsPerPage}&search=${searchText}`);
        setTotalCoins(responseCount.length);
      } else {
        response = await getInfo(`assets/?offset=${firstCoinsIndex}&limit=${coinsPerPage}`);
        setTotalCoins(2000);
      }
      setCurrentCoins(response);
    };
    getCoins();
  }, [coinsPerPage, time, currentPage, searchText, rate]);

  return (
    <div className="list-page">
      <Header />
      <CoinBlock coins={currentCoins} rate={rate} />
      <Pagination totalPages={totalPages} pagination={pagination} />
    </div>

  );
}

export default ListPage;
