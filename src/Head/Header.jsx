import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBlocks from '../Components/Header/HeaderBlocks';
import totalPrice from '../Functions/totalprice';
import priceDiff from '../Functions/priceDiff';
import fixed from '../Functions/fixed';

function Header({ coins, tasks }) {
  const [totalprice, SetTotalPrice] = useState(0);
  const [priceDifferences, setPriceDifferences] = useState(null);
  const [priceProcent, setPriceProcent] = useState(null);

  const currentCoins = coins.slice(0, 3);

  const getUpdateCoins = () => {
    const array = [];
    tasks.forEach((task) => {
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
    const updatePrice = priceDiff(array, tasks);
    let priceDifference = totalAmount - updatePrice;
    priceDifference = fixed(priceDifference);
    setPriceDifferences(priceDifference);
    return priceDifference;
  };

  useEffect(() => {
    const totalAmount = getTotalPrice();
    const priceDifference = getPriceDifferences(totalAmount);
    getProcent(totalAmount, priceDifference);
  });

  return (
    <div className="header">
      <div className="popular-coins">
        <div className="popular-coins__top">
          MOST POPULAR COINS
        </div>
        <HeaderBlocks currentCoins={currentCoins} />
      </div>
      <div className="navigation">
        <Link className="navigation__link" to={'/*'}>
          List page
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
    </div>
  );
}

export default Header;
