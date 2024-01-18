import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SquareImg1 from './assets/square_img1.jpeg';
import SquareImg2 from './assets/square_img2.jpeg';
import SquareImg3 from './assets/square_img3.jpeg';

const firstName = 'Sami';
const lastName = 'Munir';
// const num = 556;


ReactDOM.render(
  <div>
    <h1 
      className='heading'
      contentEditable='true'
      spellCheck='false'
    >
        Welcome, {firstName + ' ' + lastName}
    </h1>
    <h2>I love squares!</h2>
    <ul>
      <li>
        <img src={SquareImg1} alt='square (1)'/>
      </li>
      <li>
        <img src={SquareImg2 + '?grayscale'} alt='square (2)'/>
      </li>
      <li>
        <img src={SquareImg3} alt='square (3)'/>
      </li>
    </ul>
  </div>, 
document.getElementById('root'));