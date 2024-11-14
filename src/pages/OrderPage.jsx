import { Link, Navigate } from 'react-router-dom';
import Loading from '../comps/Loading';
import  {useFetch, handlePost } from '../usefetch'
import { useState } from 'react';
import backArrow from '../assets/arrow-left.svg'
const OrderPage = () => {
    const token = localStorage.getItem('auth_token') 
    const {items,isloading,error} =useFetch('http://127.0.0.1:8000/api/orders/')
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem('cart'))||[])  
    console.log(items);
    const handleOrder = ()=>{
        const data= {
            address,
            phone_number:number,
            items:[]
            }
        
        cart.forEach(item=>data.items.push({menu_item:item.id,quantity:item.quantity}))
        handlePost('http://127.0.0.1:8000/api/orders/',data)
        }
    const handleEmpty = ()=>{
        localStorage.removeItem('cart')
        setCart([])
    }
  return (
    <>
        {!token?<Navigate to={"/auth"} />:
        <>
        
        <div className="banner flex justify-end flex-col h-40">
            <h2 className="translate-y-8 text-lg ">Hi Monzer </h2>
            <h1 className="text-2xl mb-4 font-semibold">Your order</h1>
        </div>
        <div className="flex md:flex-row gap-4 flex-col">

            <div className='flex-1 flex flex-col mt-3'>
                <Link to={'/menu'} className="flex gap-1 border-b-2 fill-slate-200 mb-4 self-end items-center">
                    <img src={backArrow} className='brightness-200 w-3' alt="" /> 
                    <span>back</span>
                </Link>
                <h3 className="font-semibold text-xl mb-4">Your Cart</h3>
                <table className="self-center md:self-start w-full">
                    <thead>
                        <tr className="pb-4  border-b font-bold border-gray-400">
                            <td>Recipe</td>
                            <td>Quantity</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item=>
                            <tr key={item.id} >
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex md:flex-row mt-6 gap-2 flex-col">
                    <div className="flex-col flex flex-1">
                    <h5 htmlFor="address" className='font-medium'>Address</h5>

                    <input 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    type="text"
                    placeholder='your address' 
                     />
                    </div>
                     <div className='flex-col flex-1 flex'>
                        <h5 htmlFor="phone-number" >Phone number</h5>
                        <input 
                        value={number}
                        onChange={(e)=>setNumber(e.target.value)}
                        type="text" 
                        placeholder='your phone number' />
                     </div>
                </div>
            </div>
            
            <div className='flex flex-col gap-4'>
                <div className="flex md:flex-col w-full gap-2">
                    <button onClick={handleOrder} className="px-2 flex-1 py-1  rounded-md bg-teal-700  text-white">Order now</button>
                    <button onClick={handleEmpty} className="px-2 flex-1 py-1 font-semibold rounded-md border border-teal-700 text-teal-700 ">Empty the cart</button>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='text-xl font-bold'>previus orders</h3>
                    <Loading isloading={isloading} error={error} />
                    {items.map(order=>
                        <div key={order.id} className="flex items-center gap-2 h-fit min-w-80 overflow-hidden rounded-md bg-white shadow-md ">
                            <div className="bg-teal-600 text-white py-1 px-4 ">id: {order.id}</div>
                            <div className="flex-1">{order.items.map((item,i)=><span key={i}>{item.menu_item_name+', '}</span>)}</div>
                            <div className="px-2 py-1 border-l border-teal-200">managing..</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
        }
    </>
  )
}

export default OrderPage