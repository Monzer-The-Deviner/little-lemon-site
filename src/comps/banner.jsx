import heroPic from '../assets/heropic.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return ( 
        <div className="banner h-72">
            <div>
                <h1 className='text-5xl text-yellow-400 font-serif'>Little Lemon</h1>
                <p className='text-xl font-serif'>tradisional recipes served with modren look.</p>

                <Link to={'/reservation'}><button className='btn bg-yellow-500 text-lg'>Rerve a table</button></Link>
            </div>
            <div>
                <img src={heroPic} className='rounded-lg' alt="" />
            </div>
        </div>
     );
}
 
export default Banner;