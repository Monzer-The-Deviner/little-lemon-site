import basta from '../assets/basta.jpg'
import greekSalad from '../assets/GreekSalad.jpg'
import brushetta from '../assets/brushetta.jpg'
import RecipeCard from './recipeCard';
import Banner from './banner';
const HomePage = () => {
    const data =[
        {
            title:'Sossy Basta',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, animi facere. Deleniti exercitationem non facilis in temporibus dolores ipsa maxime omnis ipsam ex.',
            price:10.99,
            img:basta
        },
        {
            title:'Greek salad',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, animi facere. Deleniti exercitationem non facilis in temporibus dolores ipsa maxime omnis ipsam ex.',
            price:12.99,
            img:greekSalad
        },
        {
            title:'Brushetta',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, animi facere. Deleniti exercitationem non facilis in temporibus dolores ipsa maxime omnis ipsam ex.',
            price:19.99,
            img:brushetta
        },
    ]
    return ( 
    <>
        
        <Banner />
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h3>Categories</h3>
                <button className='btn bg-teal-950 text-white'>menu</button>
            </div>
            <div className="row2">
            {data.map((recipe,index)=>

                <RecipeCard 
                    title={recipe.title}
                    disc={recipe.description} 
                    pic={recipe.img} 
                    price={recipe.price}
                    key={index} />
            
            )}
            
            </div>
        </div>
    </>
     );
}
 
export default HomePage;