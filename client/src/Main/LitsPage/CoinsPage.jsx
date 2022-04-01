import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CoinBlock } from './components/CoinList';
import { Header } from '../BasketPage/components/Header';
import { Pagination } from './components/Pagination';
import ASCImage from '../../images/down--v2.png';
import DESCImage from '../../images/down--v1.png';
import * as COINS from '../../query/coins';

function ListPage({ searchText, coinsPerPage, rate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCoins, setCurrentCoins] = useState([]);
  const [totalCoins, setTotalCoins] = useState(2000);
  const [totalPages, setTotalPages] = useState(200);
  const [sortName, setSortName] = useState('');
  const [visiblePagesFromCurrentPage, setVisiblePagesFromCurrentPage] = useState(1);
  const [visiblePagesFromThеEdges, setVisiblePagesFromThеEdges] = useState(3);
  const { loading: loadingSearchedCoins, data: searchedCoins } = useQuery(COINS.GET_SEARCHED_COINS, {
    variables: {
      search: searchText,
    },
  });

  const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;

  const sort = (name) => {
    if (name === 'Rank up') setSortName('');
    else setSortName(name);
  };

  const { loading: loadingCurrentCoins, data: currentCoin } = useQuery(COINS.GET_CURRENT_COINS, {
    variables: {
      firstIndex: firstCoinsIndex,
      coinsPerPage,
    },
    pollInterval: 10000,
  });
  const { loading: loadingCurrentSearchedCoins, data: currentSearchedCoins } = useQuery(COINS.GET_CURRENT_SEARCHED_COINS, {
    variables: {
      search: searchText,
      firstIndex: firstCoinsIndex,
      coinsPerPage,
    },
    pollInterval: 10000,
  });
  const { loading: loadingCurrentSortedCoins, data: currentSortedCoins } = useQuery(COINS.GET_CURRENT_SORTED_COINS, {
    variables: {
      sortingName: sortName,
      firstIndex: firstCoinsIndex,
      coinsPerPage,
    },
    pollInterval: 10000,
  });

  const names = ['Rank', 'Name', 'Price', 'MarketCap', 'wap (24Hr)', 'Supply', 'Volume (24Hr)', 'Change (24Hr)'];
  const namesForLargeScreeen = ['MarketCap', 'wap (24Hr)', 'Supply', 'Volume (24Hr)'];

  const pagination = (pageNamber) => setCurrentPage(pageNamber);

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
    const getCoins = async () => {
      if (searchText.length) {
        if (!loadingCurrentSearchedCoins) setCurrentCoins(currentSearchedCoins.getCurrentSearchedCoins);
        if (!loadingSearchedCoins) setTotalCoins(searchedCoins.getSearchedCoins.length);
      } else {
        if (sortName) return;
        if (!loadingCurrentCoins) {
          setCurrentCoins(currentCoin.getCurrentCoins);
          setTotalCoins(2000);
        }
      }
    };
    getCoins();
  }, [currentCoin, currentSearchedCoins, sortName]);

  useEffect(() => {
    if (searchText.length || !sortName) return;
    if (!loadingCurrentSortedCoins) setCurrentCoins(currentSortedCoins.getCurrentSortedCoins);
  }, [currentSortedCoins, searchText]);

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
