import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBlocks from '../Components/Header/HeaderBlocks';
import totalPrice from '../utilities/totalprice';
import priceDiff from '../utilities/priceDiff';
import fixed from '../utilities/fixed';
import SearchBar from '../Components/ListPageComponents/SearchBar';
import Settings from '../Components/Header/Settings';

function Header({
  coins, rate, tasks, search, takeCoinsPerPage, getRateId,
}) {
  const [totalprice, SetTotalPrice] = useState(0);
  const [priceDifferences, setPriceDifferences] = useState(null);
  const [priceProcent, setPriceProcent] = useState(null);

  const currentCoins = coins.slice(0, 4);
  currentCoins.splice(2, 1);

  const getUpdateCoins = () => {
    const array = [];
    tasks.forEach(async (task) => {
      const updateCoins = coins.find((coin) => coin.id === task.key);
      array.push(updateCoins);
    });
    return array;
  };

  const getProcent = (totalAmount, priceDifference) => {
    if (!tasks.length) return setPriceProcent(null);
    const procent = priceDifference / (totalAmount / 100);
    setPriceProcent(fixed(procent));
    return '';
  };

  const getTotalPrice = () => {
    if (!tasks.length) return SetTotalPrice(0);
    const totalAmount = totalPrice(tasks);
    SetTotalPrice(fixed(totalAmount));
    return totalAmount;
  };

  const getPriceDifferences = (totalAmount) => {
    if (!tasks.length) return setPriceDifferences(null);
    const array = getUpdateCoins();
    const priceDifference = priceDiff(array, tasks, totalAmount);
    setPriceDifferences(fixed(priceDifference));
    return priceDifference;
  };

  useEffect(() => {
    const totalAmount = getTotalPrice();
    const priceDifference = getPriceDifferences(totalAmount);
    getProcent(totalAmount, priceDifference);
  });

  const names = [10, 12, 15, 17, 20];

  return (
    <div className="header">
      <div className="popular-coins">
        <div className="popular-coins__top">
          MOST POPULAR COINS
        </div>
        <HeaderBlocks currentCoins={currentCoins} rate={rate} />
      </div>
      <div className="navigation">
        <Link className="navigation__link" to={'/*'}>
          Coins
        </Link>
        <Link className="navigation__link" to="/storepage">
          Basket:
          {' '}
          $
          {totalprice}
          {' '}
          {priceDifferences}
          {' '}
          (
          {priceProcent}
          %)
        </Link>
      </div>
      <div className="utils">
        <SearchBar search={search} />
        <Settings takeCoinsPerPage={takeCoinsPerPage} names={names} getRateId={getRateId} />
      </div>
    </div>
  );
}

export default Header;
