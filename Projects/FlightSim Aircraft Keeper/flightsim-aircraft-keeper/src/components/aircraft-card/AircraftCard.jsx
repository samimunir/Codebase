import React from 'react';
import './AircraftCard.css';
import UnitedB789 from '../../assets/United-B789.jpeg';

function AircraftCard() {
    return (
        <div className='aircraft-card'>
            <div id='aircraft-title-con'>
                <h1 id='aircraft-title'>United B787</h1>
            </div>
            <div id='aircraft-image-con'>
                <img id='aircraft-image' src={UnitedB789} alt='aircraft(1)'/>
            </div>
            <div id='aircraft-type-con'>
                <h2 id='aircraft-type'>Boeing 787-900 Dreamliner</h2>
            </div>
            <div id='aircraft-airline-con'>
                <h3 id='aircraft-airline'>United Airlines</h3>
            </div>
            <div id='aircraft-registration-con'>
                <h4 id='aircraft-registration'>n37276</h4>
            </div>
            <div id='aircraft-specifications-con'>
                <p>GE-90X</p>
                <p>44,000ft</p>
                <p>Mach .85</p>
                <p>396px.</p>
            </div>
            <div className='aircraft-view-button-con'>
                <button id='aircraft-view-button' type='button'>View Aircraft</button>
            </div>
        </div>
    );
}

export default AircraftCard;