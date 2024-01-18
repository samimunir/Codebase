import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className='Navbar'>
            <ul className='Navbar-ul'>
                <li className='Navbar-ul-li'>Home</li>
                <li className='Navbar-ul-li'>About</li>
                <li className='Navbar-ul-li'>Projects</li>
                <li className='Navbar-ul-li'>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;