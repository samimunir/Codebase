import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Sami M.';

ReactDOM.render(
  <div>
    <h1>Hello, {name}</h1>
    <p>This is a paragraph...</p>
  </div>, 
document.getElementById('root'));