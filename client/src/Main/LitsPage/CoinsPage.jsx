import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CoinBlock } from './components/CoinList';
import { Header } from '../BasketPage/components/Header';
import { Pagination } from './components/Pagination';
import { sortCoins } from '../../utilities/sortCoins';
import ASCImage from '../../images/down--v2.png';
import DESCImage from '../../images/down--v1.png';
import * as COINS from '../../query/coins';

function ListPage({ searchText, coinsPerPage, rate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(2000);
  const [totalPages, setTotalPages] = useState(200);
  const [sortName, setSortName] = useState('');
  const [allCoins, setAllCoins] = useState(0);
  const [sortedCoins, setSortedCoins] = useState([]);
  const [visiblePagesFromCurrentPage, setVisiblePagesFromCurrentPage] = useState(1);
  const [visiblePagesFromThеEdges, setVisiblePagesFromThеEdges] = useState(3);
  const { loading, data } = useQuery(COINS.GET_ALL_COINS, { pollInterval: 10000 });
  const { loading: loadingSearchedCoins, data: searchedCoins } = useQuery(COINS.GET_SEARCHED_COINS, {
    variables: {
      search: searchText,
    },
  });

  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
  const lastCoinsIndex = firstCoinsIndex + coinsPerPage;

  const { loading: loadingCurrentCoins, data: currentCoin } = useQuery(COINS.GET_CURRENT_COINS, {
    variables: {
      firstIndex: firstCoinsIndex,
      coinsPerPage,
    },
    pollInterval: 1000,
  });
  const { loading: loadingCurrentSearchedCoins, data: currentSearchedCoins } = useQuery(COINS.GET_CURRENT_SEARCHED_COINS, {
    variables: {
      search: searchText,
      firstIndex: firstCoinsIndex,
      coinsPerPage,
    },
  });

  const names = ['Rank', 'Name', 'Price', 'MarketCap', 'wap (24Hr)', 'Supply', 'Volume (24Hr)', 'Change (24Hr)'];
  const namesForLargeScreeen = ['MarketCap', 'wap (24Hr)', 'Supply', 'Volume (24Hr)'];

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

  const sort = (name) => setSortName(name);

  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth > 960) {
      setVisiblePagesFromCurrentPage(8);
      setVisiblePagesFromThеEdges(20);
    }
  }, [screenWidth]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalCoins / coinsPerPage));
  }, [totalCoins, coinsPerPage]);

  useEffect(() => {
    if (!loading) setAllCoins(data.getAllCoins);
  }, [data]);

  useEffect(() => {
    const getCoins = async () => {
      if (searchText.length) {
        if (!loadingCurrentSearchedCoins) setCurrentCoins(currentSearchedCoins.getCurrentSearchedCoins);
        if (!loadingSearchedCoins) setTotalCoins(searchedCoins.getSearchedCoins.length);
      } else {
        if (sortedCoins.length) return;
        if (!loadingCurrentCoins) {
          setCurrentCoins(currentCoin.getCurrentCoins);
          setTotalCoins(2000);
        }
      }
    };
    getCoins();
  }, [coinsPerPage, currentPage, searchText, rate, sortedCoins.length, firstCoinsIndex, currentCoin]);

  useEffect(() => {
    if (sortName) setSortedCoins(sortCoins(sortName, allCoins));
  }, [sortName, allCoins]);

  useEffect(() => {
    if (searchText.length || !sortedCoins.length) return;
    setCurrentCoins(sortedCoins.slice(firstCoinsIndex, lastCoinsIndex));
  }, [sortedCoins, searchText, firstCoinsIndex, lastCoinsIndex]);

  return (
    <div className="list-page">
      <Header
        sort={sort}
        screenWidth={screenWidth}
        names={names}
        namesForLargeScreeen={namesForLargeScreeen}
        ASCImage={ASCImage}
        DESCImage={DESCImage}
      />
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
