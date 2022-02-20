import React from 'react';
import fixed from '../../Functions/fixed';

function Information({ coininf }) {
  const {
    name, symbol, priceUsd, marketCapUsd, vwap24Hr, supply, maxSupply, volumeUsd24Hr,
    changePercent24Hr,
  } = coininf;

  return (
    <div className="info-page__list">
      <div className="info-page__list-item">
        <div>
          {name}
        </div>
        <div>
          {symbol}
        </div>
      </div>
      <div className="info-page__list-item">
        price: $
        {fixed(priceUsd)}
      </div>
      <div className="info-page__list-item">
        marketCap: $
        {fixed(marketCapUsd)}
      </div>
      <div className="info-page__list-item">
        vwap (24Hr): $
        {fixed(vwap24Hr)}
      </div>
      <div className="info-page__list-item">
        supply: $
        {fixed(supply)}
      </div>
      <div className="info-page__list-item">
        maxSupply: $
        {fixed(maxSupply)}
      </div>
      <div className="info-page__list-item">
        volume (24Hr): $
        {fixed(volumeUsd24Hr)}
      </div>
      <div className="info-page__list-item">
        changePercent (24Hr):
        {' '}
        {fixed(changePercent24Hr)}
        %
      </div>
    </div>
  );
}

export default Information;
