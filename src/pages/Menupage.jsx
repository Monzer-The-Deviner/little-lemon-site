import { useState } from "react"
import {useFetch} from "../usefetch"
import ItemsList from "../comps/ItemsList"

const Menupage = () => {
  const [ItemsURL, setItemsURL] = useState('http://127.0.0.1:8000/api/menu-items/');
  const {items: categs,}=useFetch('http://127.0.0.1:8000/api/categories/')
  const {items: menuItems,error,isloading}=useFetch(ItemsURL)
  const [searchCategs,setSearchCategs] = useState([])

  const categColor = (slug)=>{
    const existed = searchCategs.find(item=>item==slug)
    if (existed) {
      return "bg-teal-700 text-white hover:bg-teal-950"

    }else{
      return "bg-gray-200 text-teal-900 hover:bg-gray-300"
    }
  
  }

  const handleAddCategs = (slug)=>{
    const existed = searchCategs.find(item=>item==slug)
    if (existed) {
      setSearchCategs(prev=>prev.filter(item=>item!=slug))

    }else{
      setSearchCategs(prev=>[...prev,slug])
    }
  }
  const handleSearch = ()=>{
    let url ='http://127.0.0.1:8000/api/menu-items/'
    searchCategs.forEach((categ,index)=>{
      if (index==0) {
        url+=`?category=${categ}`
      } else{
        url+=`&category=${categ}`
      }
    })
    setItemsURL(url)
  }
  return (
    <>
      <div className="flex justify-between border-b py-2 border-teal-600">
        <div className=" gap-3 items-center flex md:justify-start justify-center">
            {categs.map(categ=> 
            <div 
            onClick={()=>handleAddCategs(categ.slug)}
            className={`p-1 px-2 text-xs rounded-full ${categColor(categ.slug)} duration-300 `} key={categ.slug}>{categ.title}</div> )}
        </div>
        <div className='flex-1 flex justify-end'>
            <button 
            onClick={handleSearch}
            className="bg-teal-700 text-sm px-2 py-1 text-white rounded-md">
              Filter
            </button>
        </div>
      </div>

      <ItemsList list={menuItems} isloading={isloading} error={error} />

    </>
  )
}

export default Menupage