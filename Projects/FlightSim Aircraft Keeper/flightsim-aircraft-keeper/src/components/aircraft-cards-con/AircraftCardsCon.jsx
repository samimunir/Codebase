import React from 'react';
import './AircraftCardsCon.css';
import aircrafts from '../../aircrafts';
import AircraftCard from '../aircraft-card/AircraftCard';

function AircraftCardsCon() {
    return (
        <div className='aircraft-cards-con'>
            {
                aircrafts.map((aircraft) => {
                    return (
                        <AircraftCard
                            title={aircraft.title}
                            image={aircraft.acimage}
                            type={aircraft.actype}
                            airline={aircraft.airline}
                            registration={aircraft.acregistration}
                            engine={aircraft.acspecs.acengine}
                            maxfl={aircraft.acspecs.acmaxfl}
                            maxmach={aircraft.acspecs.acmaxmach}
                            maxpx={aircraft.acspecs.acmaxpx}
                        />
                    );
                })
            }
        </div>
    );
}

export default AircraftCardsCon;