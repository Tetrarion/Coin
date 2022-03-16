import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBlocks from './components/HeaderBlocks';
import getTotalPrice from '../utilities/totalprice';
import priceDiff from '../utilities/priceDiff';
import fixed from '../utilities/fixed';
import SearchBar from './components/SearchBar';
import Settings from './components/Settings';
import BasketButton from './components/BasketButton';

function Header({
  coins, rate, tasks, search, takeCoinsPerPage, getRateId,
}) {
  const [totalPrice, SetTotalPrice] = useState(0);
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

  const saveProcent = (totalAmount, priceDifference) => {
    if (!tasks.length) return setPriceProcent(null);
    const procent = priceDifference / (totalAmount / 100);
    setPriceProcent(fixed(procent));
    return '';
  };

  const saveTotalPrice = () => {
    if (!tasks.length) return SetTotalPrice(0);
    const totalAmount = getTotalPrice(tasks);
    SetTotalPrice(fixed(totalAmount));
    return totalAmount;
  };

  const savePriceDifferences = (totalAmount) => {
    if (!tasks.length) return setPriceDifferences(null);
    const array = getUpdateCoins();
    const priceDifference = priceDiff(array, tasks, totalAmount);
    setPriceDifferences(fixed(priceDifference));
    return priceDifference;
  };

  useEffect(() => {
    const totalAmount = saveTotalPrice();
    const priceDifference = savePriceDifferences(totalAmount);
    saveProcent(totalAmount, priceDifference);
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
        <BasketButton totalPrice={totalPrice} priceDifferences={priceDifferences} priceProcent={priceProcent} />
      </div>
      <div className="utils">
        <SearchBar search={search} />
        <Settings takeCoinsPerPage={takeCoinsPerPage} names={names} getRateId={getRateId} />
      </div>
    </div>
  );
}

export default Header;
