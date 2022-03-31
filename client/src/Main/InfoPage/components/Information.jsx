import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import fixed from '../../../utilities/fixed';
import { GET_COIN } from '../../../query/coins';

export function Information({ id, rate }) {
  const [info, setInfo] = useState('');
  const { loading, data } = useQuery(GET_COIN, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (!loading) setInfo(data.getCoin);
  }, [data]);

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
