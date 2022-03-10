import React, { useState, useEffect } from 'react';
import fixed from '../../utilities/fixed';
import getInfo from '../../API/api';

export default function Information({ id, rate }) {
  const [info, SetInfo] = useState('');

  useEffect(() => {
    const getInformation = async () => {
      SetInfo(await getInfo(`assets/${id}`));
      setTimeout(getInformation, 10000);
    };
    getInformation();
  }, [id]);

  return (
    <div className="info-page__list">
      <div className="info-page__list-item">
        <div>
          {info.name}
        </div>
        <div>
          {info.symbol}
        </div>
      </div>
      <div className="info-page__list-item">
        price:
        {' '}
        <br />
        {' '}
        {rate.symbol}
        {' '}
        {fixed(info.priceUsd / rate.value)}
      </div>
      <div className="info-page__list-item">
        marketCap:
        {' '}
        {rate.symbol}
        {' '}
        {fixed(info.marketCapUsd / rate.value)}
      </div>
      <div className="info-page__list-item">
        vwap (24Hr):
        {' '}
        {rate.symbol}
        {' '}
        {fixed(info.vwap24Hr / rate.value)}
      </div>
      <div className="info-page__list-item">
        supply:
        {' '}
        <br />
        {' '}
        {rate.symbol}
        {' '}
        {fixed(info.supply / rate.value)}
      </div>
      <div className="info-page__list-item">
        maxSupply:
        {' '}
        {rate.symbol}
        {' '}
        {fixed(info.maxSupply / rate.value)}
      </div>
      <div className="info-page__list-item">
        volume (24Hr):
        {' '}
        {rate.symbol}
        {' '}
        {fixed(info.volumeUsd24Hr / rate.value)}
      </div>
      <div className="info-page__list-item">
        changePercent (24Hr):
        {' '}
        {fixed(info.changePercent24Hr)}
        %
      </div>
    </div>
  );
}
