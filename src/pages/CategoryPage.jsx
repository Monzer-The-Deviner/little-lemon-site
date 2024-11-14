/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom"
import {useFetch} from "../usefetch"
import ItemsList from "../comps/ItemsList";

const CategoryPage = () => {
    const {slug} = useParams()

    
    const {items: menuItems,error,isloading}=useFetch(`http://127.0.0.1:8000/api/menu-items/?category=${slug}`)
    const {items: category}=useFetch(`http://127.0.0.1:8000/api/categories/${slug}/`)
    
    // const category = categ[0]
  return (
    <>
        <div 
        className="bg-slate-500 h-44 mt-12 rounded-lg  justify-end flex-col p-4 flex" 
        style={{backgroundImage:`linear-gradient(rgba(0, 22, 18, 0.712),rgba(0, 31, 14, 0.192)), url(${category?.image})`}}
        >
            <h2 className="text-xl md:text-3xl font-bold text-white">
                {category?.title}
            </h2>
            <p className="text-white text-sm">
                {category?.description}
            </p>
        </div>

        <ItemsList list={menuItems} isloading={isloading} error={error} />
    </>
  )
}

export default CategoryPage