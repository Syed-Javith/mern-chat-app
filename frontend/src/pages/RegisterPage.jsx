import React from 'react'
import '../styles/Login.css'

const RegisterPage = () => {

  

  return (
    <div className='login'>
      <h1>Register</h1>

      <img src={require('../images/avatar.png')} alt="" />

      <p>Username</p>
      <input className='input-box' type="text" name='username'/>
      <p>Email</p>
      <input className='input-box' type="text" name='email' />
      <p>Password</p>
      <input className='input-box' type="password" name='password'/> <br />

      <input type="submit" value="register" />
    </div>
  )
}

export default RegisterPage
