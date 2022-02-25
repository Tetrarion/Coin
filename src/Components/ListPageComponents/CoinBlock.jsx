import React from 'react';
import { Link } from 'react-router-dom';
import fixed from '../../Functions/fixed';

function CoinBlock({
  coins, handleCoinSubmit, showInputForCount,
}) {
  // useEffect(() => {
  //   // eslint-disable-next-line array-callback-return
  //   coins.map(async (coin) => {
  //     const item = sessionStorage.getItem(`${coin.id}`);
  //     const element = document.getElementById(`${coin.id}`);
  //     if (item !== coin.priceUsd) {
  //       if (item > coin.priceUsd) {
  //         element.classList.add('red');
  //       }
  //       if (item < coin.priceUsd) {
  //         element.classList.add('green');
  //       }
  //       if (item === undefined) return;
  //       sessionStorage.setItem(`${coin.id}`, coin.priceUsd);
  //     }
  //   });
  // });

  // const removeAll = () => {
  //   const redClass = document.querySelectorAll('.red');
  //   const greenClass = document.querySelectorAll('.green');
  //   redClass.forEach((element) => {
  //     element.classList.remove('red');
  //   });
  //   greenClass.forEach((element) => {
  //     element.classList.remove('green');
  //   });
  // };

  // setTimeout(removeAll, 2000);

  return (
    <div className="coins-list">
      {
                  coins.map((coin) => (
                    <div className="coin" id={coin.id} key={coin.id} onClick={showInputForCount} onKeyDown={showInputForCount} role="button" tabIndex={0}>
                      <div className="coin__info">
                        {coin.rank}
                      </div>
                      <Link className="coin__info" to={`/infopage/${coin.id}`}>
                        <div className="coin__info-name">
                          {coin.name}
                        </div>
                        <div className="coin__info-symbol">
                          {coin.symbol}
                        </div>
                      </Link>
                      <div className="coin__info">
                        $
                        {fixed(coin.priceUsd)}
                      </div>
                      <div className="coin__info-sm">
                        $
                        {fixed(coin.marketCapUsd)}
                      </div>
                      <div className="coin__info-sm">
                        $
                        {fixed(coin.vwap24Hr)}
                      </div>
                      <div className="coin__info-sm">
                        $
                        {fixed(coin.supply)}
                      </div>
                      <div className="coin__info-sm">
                        $
                        {fixed(coin.volumeUsd24Hr)}
                      </div>
                      <div className="coin__info">
                        {fixed(coin.changePercent24Hr)}
                        %
                      </div>
                      <div className="coin__form coin__form--display--none">
                        <input className="coin__form-input" type="number" />
                        <button className="form-button form-button--color--green" onClick={handleCoinSubmit}>Add to basket</button>
                      </div>
                    </div>
                  ))
              }
    </div>
  );
}

export default CoinBlock;
