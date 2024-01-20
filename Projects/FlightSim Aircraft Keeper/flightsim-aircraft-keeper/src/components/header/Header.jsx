import React from 'react';
import './Header.css';

function Header() {
    const today = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return (
        <div className='header'>
            <div className='header-title-con'>
                <h1 id='header-title'>FlightSim Aircraft Keeper</h1>
            </div>
            <div className='header-time-con'>
                <p id='header-time-date'>{today}</p>
                <p id='header-time-time'>{time}</p>
            </div>
        </div>
    );
}

export default Header;