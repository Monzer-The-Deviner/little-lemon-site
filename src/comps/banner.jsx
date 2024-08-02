import heroPic from '../assets/heropic.jpg'
const Banner = () => {
    return ( 
        <div className="banner">
            <div>
                <h1 className='text-5xl text-yellow-400 font-serif'>Little Lemon</h1>
                <p className='text-xl font-serif'>tradisional recipes served with modren look.</p>
            </div>
            <div>
                <img src={heroPic} className='rounded-lg' alt="" />
            </div>
        </div>
     );
}
 
export default Banner;