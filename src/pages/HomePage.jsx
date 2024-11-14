import RecipeCard from '../comps/recipeCard';
import Banner from '../comps/banner';
import {useFetch} from '../usefetch';
import { Link } from 'react-router-dom';
import Loading from '../comps/Loading';

const HomePage = () => {
    // const categs = [
    //     {title:"Drinks", description:"stay cool with our coolest collection", slug:'drinks'},
    //     {title:"Desirts", description:"stay cool with our coolest collection", slug:'desirts'},
    //     {title:"Icecream", description:"stay cool with our coolest collection", slug:'icecream'},
    // ]
    const {items: menuItems,error,isloading}=useFetch('http://127.0.0.1:8000/api/menu-items/')
    const {items: categs,}=useFetch('http://127.0.0.1:8000/api/categories/')
    return ( 
    <>
        <br />
        <Banner />
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <h3>Categories</h3>
                    <Link to={'/menu'} className='btn text-sm bg-teal-950 text-white'>Menu</Link>
                </div>
                <div className="flex-warp gap-3  flex md:justify-start justify-center">
                    {categs.map(categ=> <Link to={`/category/${categ.slug}`} className="p-1 px-2 text-sm rounded-full bg-teal-700 hover:bg-teal-950 duration-300 text-white" key={categ.slug}>{categ.title}</Link> )}
                </div>
            </div>
            <Loading isloading={isloading} error={error} />
            <div className="row2">
                {menuItems?.map((recipe,index)=>

                    <RecipeCard 
                        id={recipe.id}
                        title={recipe.name}
                        description={recipe.description} 
                        pic={recipe.image} 
                        price={recipe.price}
                        key={index} />
                
                )}
            
            </div>
        </div>
    </>
     );
}
 
export default HomePage;