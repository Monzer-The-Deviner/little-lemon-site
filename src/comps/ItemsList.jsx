/* eslint-disable react/prop-types */
import Loading from './Loading'
import { Link } from 'react-router-dom'

const ItemsList = ({isloading,error,list}) => {
  return (
    <div className="flex flex-col gap-2 mt-4 md:gap-3">
            
        <Loading isloading={isloading} error={error} />
        {list.map(item=>
            <Link to={`/menu/${item.id}`} key={item.id} className="flex flex-col md:flex-row rounded-lg shadow-lg lg:min-h-44 overflow-hidden bg-white gap-2 min-h-40">
                <div 
                style={{backgroundImage:`url(${item?.image}`}}
                className="flex-1 bg-cover bg-center min-h-32 bg-gray-400"
                ></div>
                <div className="flex-1 p-3">
                    <div className="flex justify-between">
                        <h4 className="text-lg md:text-xl font-semibold  "> {item?.name}</h4>
                        <h4>${item.price}</h4>
                    </div>
                    <p className=" text-sm">
                        {item?.description}
                    </p>
                </div>
            </Link>
            )}
    </div>
  )
}

export default ItemsList