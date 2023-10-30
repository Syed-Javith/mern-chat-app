import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { loginUser} from '../apis/Login'
import '../styles/Login.css'

const LoginPage = () => {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [isLogging , setIsLogging] = useState(false);

  const navigation = useNavigate();


  const login = async () => {

    setIsLogging(true)

    try{
      const response = await loginUser(email,password)
      // console.log(response);

     if(response?.response?.status >= 400){
      setIsLogging(false)
      alert('invalid user')
     }


      if(response?.data?.user){
        const cookies = new Cookies();
        cookies.set( 'token' , response.data.token , { path : '/'  } );
        cookies.set('user',response.data.user , { path : '/' })
        setIsLogging(false)
        navigation('/chats')
      }

    }catch(err){
      
      alert('invalid user')
      
    }finally{
      setIsLogging(false)
    }
    
  }


  return (
    <div className='login'>
      <h1>Login</h1>

      <img src={require('../images/avatar.png')} alt="" />

      <p>Email</p>
      <input className='input-box' type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <p>Password</p>
      <input className='input-box' type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

      <br/>

      <input type="submit" value={ isLogging ? "Logging in..." : "Login" }  onClick={login}/>

      <p>or</p>
      {/* <a href="http://localhost:5000/auth/google">continue with google</a> */}

      <Link to={'/register'}><p>If new new user register here</p></Link>
    </div>
  )
}

export default LoginPage
