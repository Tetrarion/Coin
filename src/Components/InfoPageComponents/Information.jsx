import React, { useState, useEffect } from 'react';
import fixed from '../../utilities/fixed';
import getInfo from '../../API/api';

export default function Information({ id }) {
  const [info, SetInfo] = useState('');

  useEffect(() => {
    const getInformation = async () => {
      SetInfo(await getInfo(`assets/${id}`));
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
        $
        {fixed(info.priceUsd)}
      </div>
      <div className="info-page__list-item">
        marketCap: $
        {fixed(info.marketCapUsd)}
      </div>
      <div className="info-page__list-item">
        vwap (24Hr): $
        {fixed(info.vwap24Hr)}
      </div>
      <div className="info-page__list-item">
        supply:
        {' '}
        <br />
        {' '}
        $
        {fixed(info.supply)}
      </div>
      <div className="info-page__list-item">
        maxSupply: $
        {fixed(info.maxSupply)}
      </div>
      <div className="info-page__list-item">
        volume (24Hr): $
        {fixed(info.volumeUsd24Hr)}
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
