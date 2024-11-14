import { useState } from 'react';

const AuthForm = () => {

    const [member, setMember] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [re_password, set_re_password] = useState('');
    const [username, setusername] = useState('');
    
    const hasAnAccount = !member? 'already have an account':'create new account'
    const greeting = member? 'Welcome back!':'Welcome to the fam!'
    const sign = member?'Log in':'Sign up'

    const handleLogin = async(e)=>{
        e.preventDefault();
         fetch('http://127.0.0.1:8000/api/auth/token/login',{
            method:'POST',
            headers:{
                'content-Type':'application/json',
            },
            body:JSON.stringify({email,password})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data['auth_token']){
                localStorage.setItem('auth_token',data.auth_token)
            }else{
                console.error(data['non_field_errors'])
            }
        })
        .catch(error=>console.error(error))
    }

    const handleSignup = async(e)=>{
        e.preventDefault();
        console.log(e.target.username);
        
        
         fetch('http://127.0.0.1:8000/api/auth/users/',{
            method:'POST',     
            headers:{
                'content-Type':'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                password,
                re_password,
            })
        })
        .then(res=>res.json())
        .then(data=>console.log('account created:',data))
        .catch(error=>console.error(error))
    }
    return ( 
        <form className='flex gap-6 flex-col w-72 p-8 bg-white'>
                <h1 className='text-primarly text-3xl'>{greeting}</h1>
                <div className='flex flex-col gap-2'>
                 {!member && 
                 <>
                 <label  htmlFor="user-name">Username</label>
                  <input 
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
                    placeholder='add username'
                    type="text" name='username' 
                    id='user-name' />
                </>}
                             <label htmlFor="email">Email address</label>
                              <input 
                               value={email}
                               onChange={(e)=>setemail(e.target.value)}
                               placeholder='ex..123@mail.com'
                               name='email'
                               id='email' 
                               type="email"
                                />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                     <input 
                     onChange={e=>setpassword(e.target.value)}
                     value={password}
                     id='password' 
                     name='password' 
                     placeholder='add password' 
                     type="password" 
                      />
                    {!member && <>
                    <label htmlFor="2ndpassword">rewrite Password</label>
                    <input 
                    onChange={e=>set_re_password(e.target.value)}
                    value={re_password}
                    id='2ndpassword' 
                    name='re_password' 
                    placeholder='one more time..' 
                    type="password"
                     />
                    </>}
                </div>
                <button 
                onClick={member?handleLogin:handleSignup}
                type='submit'
                className='btn bg-teal-900 text-white'
                >
                {sign}
                </button>

                <div>

                <a href="#" className='text-sm text-primarly' onClick={(()=>setMember(prv=>!prv))}>{hasAnAccount}</a>
                </div>
            </form>
     );
}
 
export default AuthForm