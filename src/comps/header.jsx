import logo from '../assets/logoSm.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <header className="header">
        <Link to={'/'}><img src={logo} className="logo" alt="Little lemon" /></Link>
        <ul className='text-sm'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        </header>
     );
}
 
export default Header;