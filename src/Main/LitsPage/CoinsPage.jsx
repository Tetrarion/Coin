import React, { useEffect, useState } from 'react';
import { CoinBlock } from './components/CoinList';
import { Header } from './components/CoinsHeader';
import { Pagination } from './components/Pagination';
import { sortCoins } from '../../utilities/sortCoins';
import getInfo from '../../API/api';

function ListPage({ searchText, coinsPerPage, rate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(2000);
  const [time, setTime] = useState(0);
  const [totalPages, setTotalPages] = useState(200);
  const [sortName, setSortName] = useState('');
  const [allCoins, setAllCoins] = useState(0);
  const [sortedCoins, setSortedCoins] = useState([]);
  const [visiblePagesFromCurrentPage, setVisiblePagesFromCurrentPage] = useState(1);
  const [visiblePagesFromThеEdges, setVisiblePagesFromThеEdges] = useState(3);

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  const sort = (name) => setSortName(name);

  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
  const lastCoinsIndex = firstCoinsIndex + coinsPerPage;

  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth > 960) {
      setVisiblePagesFromCurrentPage(8);
      setVisiblePagesFromThеEdges(20);
    }
  }, [screenWidth]);

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
    const getAllCoins = async () => {
      const response = await getInfo('assets/?limit=2000');
      setAllCoins(response);
    };
    getAllCoins();
  }, [time]);

  useEffect(() => {
    const getCoins = async () => {
      let response;
      if (searchText.length) {
        const responseCount = await getInfo(`assets/?search=${searchText}&limit=2000`);
        response = await getInfo(`assets/?offset=${firstCoinsIndex}&limit=${coinsPerPage}&search=${searchText}`);
        setTotalCoins(responseCount.length);
      } else {
        if (sortedCoins.length) return;
        response = await getInfo(`assets/?offset=${firstCoinsIndex}&limit=${coinsPerPage}`);
        setTotalCoins(2000);
      }
      setCurrentCoins(response);
    };
    getCoins();
  }, [coinsPerPage, time, currentPage, searchText, rate, sortedCoins.length, firstCoinsIndex]);

  useEffect(() => {
    if (sortName) setSortedCoins(sortCoins(sortName, allCoins));
  }, [sortName, allCoins]);

  useEffect(() => {
    if (searchText.length || !sortedCoins.length) return;
    setCurrentCoins(sortedCoins.slice(firstCoinsIndex, lastCoinsIndex));
  }, [sortedCoins, searchText, firstCoinsIndex, lastCoinsIndex]);

  return (
    <div className="list-page">
      <Header sort={sort} />
      <CoinBlock coins={currentCoins} rate={rate} />
      <Pagination
        totalPages={totalPages}
        visiblePagesFromCurrentPage={visiblePagesFromCurrentPage}
        visiblePagesFromThеEdges={visiblePagesFromThеEdges}
        pagination={pagination}
      />
    </div>

  );
}

export default ListPage;
