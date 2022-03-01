import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import fixed from '../../utilities/fixed';
import showInputForCount from '../../utilities/showInputForCount';
import * as actions from '../../Store/actions';

function CoinBlock({ coins }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0);
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
                        <input className="coin__form-input" type="number" onChange={(e) => setInputValue(e.target.value)} />
                        <button className="form-button form-button--color--green" onClick={() => { dispatch(actions.loadCoin(coin.id, inputValue)); }}>
                          <div className="form-button__text">Add to basket</div>
                        </button>
                      </div>
                    </div>
                  ))
              }
    </div>
  );
}

export default CoinBlock;
