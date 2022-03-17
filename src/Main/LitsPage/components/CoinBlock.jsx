import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fixed from '../../../utilities/fixed';
import showInputForCount from '../../../utilities/showInputForCount';
import { Form } from '../../../components/Form';

export function CoinBlock({ coins, rate }) {
  const [prevElement, setPrevElement] = useState('');

  const savePrevElement = (targetElement) => {
    if (prevElement !== targetElement) {
      showInputForCount(targetElement, prevElement);
      setPrevElement(targetElement);
    }
  };

  return (
    <div className="list-page__coins-list">
      {
                  coins.map((coin) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <div className="coin" id={coin.id} key={coin.id} onClick={(event) => savePrevElement(event.currentTarget)} role="button" tabIndex={0}>
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
                        {rate.symbol}
                        {' '}
                        {fixed(coin.priceUsd / rate.value)}
                      </div>
                      <div className="coin__info-sm">
                        {rate.symbol}
                        {' '}
                        {fixed(coin.marketCapUsd / rate.value)}
                      </div>
                      <div className="coin__info-sm">
                        {rate.symbol}
                        {' '}
                        {fixed(coin.vwap24Hr / rate.value)}
                      </div>
                      <div className="coin__info-sm">
                        {rate.symbol}
                        {' '}
                        {fixed(coin.supply / rate.value)}
                      </div>
                      <div className="coin__info-sm">
                        {rate.symbol}
                        {' '}
                        {fixed(coin.volumeUsd24Hr / rate.value)}
                      </div>
                      <div className="coin__info">
                        {fixed(coin.changePercent24Hr)}
                        %
                      </div>
                      <div className="coin__form coin__form--none">
                        <Form id={coin.id} rateId={rate.id} priceUsd={coin.priceUsd} symbol={rate.symbol} />
                      </div>
                    </div>
                  ))
              }
    </div>
  );
}
