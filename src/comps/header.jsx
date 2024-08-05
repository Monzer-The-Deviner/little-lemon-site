import { useState } from 'react';
import logo from '../assets/logoSm.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
    const [visible,setvisible] = useState(false)
    return ( 
        <header className="header">
        <Link to={'/'}><img src={logo} className="logo" alt="Little lemon" /></Link>
        <button 
        onClick={()=>setvisible(prev=>!prev)}
        className='btn lg:invisible border-emerald-600 border-2'>nav</button>
        <nav className={`nav ${visible?'visible':'invisible lg:visible'}`}>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">CONTACT</a></li>
        </nav>
        </header>
     );
}
 
export default Header;