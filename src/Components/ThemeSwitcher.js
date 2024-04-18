// ThemeSwitcher.js
import React from 'react';
import './Style.css';

const ThemeSwitcher = ({ themes, onThemeChange }) => {
  return (
    <div className="theme-switcher">
      <div className="dropdown dropdown-left">
        <label tabIndex="0" className="btn m-1">
          <i className='bx bxs-palette bx-sm'></i>
        </label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          {themes.map(theme => (
            <li key={theme} className="theme-item" theme={theme} onClick={() => onThemeChange(theme)}>
              <button >{theme}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
