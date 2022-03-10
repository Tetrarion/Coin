/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import Select from '../ListPageComponents/Select';
import SelectL from '../ListPageComponents/SelectL';
import getInfo from '../../API/api';

const settingsImage = require('../../images/40031.png');

export default function Settings({ takeCoinsPerPage, names, getRateId }) {
  const [className, setClassName] = useState('settings__list settings__list--hidden');
  const [rates, setRates] = useState([]);

  const showSettings = () => setClassName('settings__list');

  const hideSettings = () => setClassName('settings__list settings__list--hidden');

  useEffect(() => {
    const getRates = async () => {
      const response = await getInfo('rates');
      setRates(response);
    };
    getRates();
  }, []);

  return (
    <div className="settings">
      <img className="settings__icon" src={settingsImage} alt="settings__icon" onClick={showSettings} onKeyDown={showSettings} role="button" tabIndex={0} />
      <div className={className} onBlur={hideSettings}>
        <div className="settings__list-top">
          Settings
        </div>
        <div className="settings__list-item">
          <div className="settings__list-item-text">
            Coins on page
          </div>
          <Select func={takeCoinsPerPage} names={names} />
        </div>
        <div className="settings__list-item">
          <div className="settings__list-item-text">
            Rates
          </div>
          <SelectL func={getRateId} names={rates} />
        </div>
      </div>
    </div>
  );
}
