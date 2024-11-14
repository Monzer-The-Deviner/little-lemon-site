import { Link, useParams } from "react-router-dom"
import {useFetch} from "../usefetch"
import RecipeCard from "../comps/recipeCard"
import Loading from "../comps/Loading"
const ItemDetails = () => {
    const {id} = useParams()
    const {items: menuItem,error,isloading}=useFetch(`http://127.0.0.1:8000/api/menu-items/${id}/`)
    const {items: semilarmenuItem}=useFetch(`http://127.0.0.1:8000/api/menu-items/?category=${menuItem.category}`)
    const addToCart = (item)=>{
        const cart = JSON.parse(localStorage.getItem('cart'))||[]
        const existied = cart.find(cartItem=>cartItem.id==item.id)
        if (existied) {
            existied.quantity+=1
            alert(`Another ${item.name} was added to cart`)
        }else{
            cart.push({id:item.id,name:item.name,price:item.price,quantity:1})
            alert(`Item ${item.name} added successfully`)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        
    }
    // const category = categ[0]
  return (
    <>
        <div 
        className="bg-slate-500 min-h-44 rounded-lg bg-cover bg-center justify-end flex-col p-4 flex" 
        style={{backgroundImage:` url(${menuItem?.image})`}}
        >
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
            {menuItem?.name}
        </h2>
        <div className="flex justify-between items-center">
            <span className="font-semibold md:text-lg">${menuItem.price}</span>
            <div className="flex gap-2">
                <Link to={'/order'} onClick={()=>addToCart(menuItem)} className="btn text-white bg-teal-950 text-sm">Order now</Link>
                <button onClick={()=>addToCart(menuItem)}  className="btn border border-teal-900 text-teal-900">Add to cart</button>
            </div>
        </div>
        <p className="text-sm mt-4">
            {menuItem.description}
        </p>
        <div className="overflow-x-scroll pb-4  mt-6">
            <h4 className="text-xl font-bold">Simular Recipies</h4>
        <div className="flex flex-col md:flex-row gap-3 items-center mt-4 md:gap-3">
        <Loading isloading={isloading} error={error} />
            {semilarmenuItem.map(item=>

                <RecipeCard 
                id={item.id}
                description={item.description}
                pic={item.image}
                price={item.price}
                title={item.name}
                key={item.id}
                />
            )}
        </div>
        </div>
    </>
  )
}

export default ItemDetails