// Alert.js
import React from 'react';
import './Style.css';


const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} shadow-lg mb-5 w-full`}>
      <div>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Alert;
