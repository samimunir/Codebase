import './Navbar.css';
import Logo from '../../assets/Munir Code Forge Logo.png';

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='navbar-logo'>
                <img src={Logo} alt='logo'/>
                <h1>Munir Code Forge</h1>
            </div>
            <div className='navbar-list'>
                <a href='/'>Home</a>
                <a href='/'>Our Work</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
            </div>
            <div className='navbar-connect'>
                <button className='navbar-connect-btn'>Let's Connect</button>
            </div>
        </div>
    );
};

export default Navbar;