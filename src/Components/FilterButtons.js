// FilterButtons.js
import React from 'react';
import './Style.css';

const FilterButtons = ({ onFilter }) => {
  return (
    <div className="todos-filter">
      <div className="dropdown">
        <label tabIndex="0" className="btn m-1">
          Filter
        </label>
        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li onClick={() => onFilter('all')}><button >All</button></li>
          <li onClick={() => onFilter('pending')}><button >Pending</button></li>
          <li onClick={() => onFilter('completed')}><button>Completed</button></li>
        </ul>
      </div>
    </div>
  );
};

export default FilterButtons;
