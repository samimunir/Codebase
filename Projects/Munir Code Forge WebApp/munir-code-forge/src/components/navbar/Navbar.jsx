import './Navbar.css';
import Logo from '../../assets/Munir Code Forge Logo.png';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='navbar-logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='navbar-list'></div>
            <div className='navbar-connect'></div>
        </div>
    );
};

export default Navbar;