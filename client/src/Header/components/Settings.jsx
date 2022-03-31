import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Select } from '../../components/Select/Select';
import { SelectList } from './SelectList';
import settingsImage from '../../images/40031.png';
import { GET_ALL_RATES } from '../../query/rates';

export function Settings({ takeCoinsPerPage, names, getRateId }) {
  const [className, setClassName] = useState('settings__list settings__list--hidden');
  const [rates, setRates] = useState([]);
  const { loading, data } = useQuery(GET_ALL_RATES);

  const showSettings = () => setClassName('settings__list');

  const hideSettings = () => setClassName('settings__list settings__list--hidden');

  useEffect(() => {
    if (!loading) setRates(data.getAllRates);
  }, [data]);

  return (
    <div className="settings">
      <div className="settings__icon-container" onClick={showSettings} onKeyDown={showSettings} role="button" tabIndex={0}>
        <img className="settings__icon" src={settingsImage} alt="settings__icon" />
      </div>
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
          <SelectList func={getRateId} names={rates} />
        </div>
      </div>
    </div>
  );
}
