import { useEffect,useState } from "react";
export const useFetch = (url,method='GET',requestBody='') => {
    const [items, setitems] = useState([]);
    const [error, setError] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const authToken = localStorage.getItem('auth_token')
    const headers = {
        'content-Type':'application/json',
    }
    if(authToken){
        headers['Authorization'] = `Token ${authToken}`
    }
    
    useEffect(()=>{
        setIsloading(true)
        setError(false)
        fetch(url,{headers,method,body:(method!="GET")?requestBody:null})
            .then(res=>{
                setIsloading(false)
                return res.json()
            } )
            .then(data=>{
                console.log(data)
                setitems(()=>data.results||data)
            })
            .catch(err=>{
                setError(true)
                setIsloading(false)
                console.error(err)
            })
    },[url,method])
    // const [items, setitems] = useState([]);
    // useEffect(()=>{
    //     fetch("http://127.0.0.1:8000/api/menu-items/")
    //         .then(res=> res.json())
    //         .then(data=>setitems(data.results))
    //         .catch(err=>console.error(err))
    // },[])
  return {items,isloading,error}
}
export const handlePost =(url,data)=>{
    const authToken = localStorage.getItem('auth_token')
    console.log(authToken)
    const headers = {
        'content-Type':'application/json',
    }
    if(authToken){
        headers['Authorization'] = `Token ${authToken}`
    }
    fetch(url,{
        method:'POST',     
        headers,
        body: JSON.stringify(data)
    })
    .then(res=>{
        if (res.ok) {
            return res.json()
        }else{
            console.log('cant be post',res.json())
        }

    })
    .then(data=>console.log(data))
    .catch(error=>console.error(error))
    
}

