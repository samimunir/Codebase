import React from 'react';
import './AircraftCard.css';

function AircraftCard(props) {
    return (
        <div className='aircraft-card'>
            <div id='aircraft-title-con'>
                <h1 id='aircraft-title'>{props.title}</h1>
            </div>
            <div id='aircraft-image-con'>
                <img id='aircraft-image' src={props.image} alt='aircraft(1)'/>
            </div>
            <div id='aircraft-type-con'>
                <h2 id='aircraft-type'>{props.type}</h2>
            </div>
            <div id='aircraft-airline-con'>
                <h3 id='aircraft-airline'>{props.airline}</h3>
            </div>
            <div id='aircraft-registration-con'>
                <h4 id='aircraft-registration'>{props.registration}</h4>
            </div>
            <div id='aircraft-specifications-con'>
                <p>{props.engine}</p>
                <p>{props.maxfl}</p>
                <p>{props.maxmach}</p>
                <p>{props.maxpx}</p>
            </div>
            <div className='aircraft-view-button-con'>
                <button id='aircraft-view-button' type='button'>View Aircraft</button>
            </div>
        </div>
    );
}

export default AircraftCard;