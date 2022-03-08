/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';
import Select from '../ListPageComponents/Select';

const settingsImage = require('../../images/40031.png');

export default function Settings({ func, names }) {
  const [className, setClassName] = useState('settings__list settings__list--hidden');

  const showSettings = () => setClassName('settings__list');

  const hideSettings = () => setClassName('settings__list settings__list--hidden');

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
          <Select func={func} names={names} />
        </div>
      </div>
    </div>
  );
}
