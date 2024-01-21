import UnitedB789 from '../src/assets/United-B789.jpeg';
import DeltaB738 from '../src/assets/Delta-B738.jpeg';
import BritishAirwaysA321 from '../src/assets/BritishAirways-A321.avif';

const aircrafts = [
    {
        id: 1,
        title: 'United B787',
        acimage: UnitedB789,
        actype: 'Boeing 787-900 Dreamliner',
        airline: 'United Airlines',
        acregistration: 'n37267',
        acspecs: {
            acengine: 'GE-90X',
            acmaxfl: '44,000ft',
            acmaxmach: 'Mach .85',
            acmaxpx: '396px.'
        }
    },
    {
        id: 2,
        title: 'Delta B738',
        acimage: DeltaB738,
        actype: 'Boeing 737-800 NG',
        airline: 'Delta Airlines',
        acregistration: 'n3752k',
        acspecs: {
            acengine: 'CFM-27B',
            acmaxfl: '41,000ft',
            acmaxmach: 'Mach .78',
            acmaxpx: '196px.'
        }
    },
    {
        id: 3,
        title: 'Speedbird A321',
        acimage: BritishAirwaysA321,
        actype: 'Airbus A321 NEO',
        airline: 'British Airways',
        acregistration: 'g-nekr',
        acspecs: {
            acengine: 'CFM-27B',
            acmaxfl: '41,000ft',
            acmaxmach: 'Mach .80',
            acmaxpx: '235px.'
        }
    }
];

export default aircrafts;