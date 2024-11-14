import { useState } from 'react';
import logo from '../assets/logoSm.jpg'
import { Link } from 'react-router-dom';
import menu from '../assets/menu.svg'
const Header = () => {
    const [visible,setvisible] = useState(false)
    return ( 
        <header className="fixed bg-white z-50 shadow-md py-1 px-2 top-0 flex justify-center left-0 w-full">
            <div className="flex w-full items-center lg:max-w-[80rem] self-center justify-between">

            <Link to={'/'}><img src={logo} className="logo" alt="Little lemon" /></Link>
            <button 
            onClick={()=>setvisible(prev=>!prev)}
            className='btn lg:invisible'><img src={menu} className=' flex-1 w-8' alt="" /></button>
            <nav className={`nav ${visible?'visible':'invisible lg:visible'}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/order"}>Order</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/reservation"}>Reservations</Link>
            </nav>
            </div>
        </header>
     );
}
 
export default Header;