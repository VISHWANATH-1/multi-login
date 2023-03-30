import React, {  useRef } from 'react'
import Movies from './Movie/Movies';

const Login = (props) => {
  
    const email=useRef();
    const password=useRef();
    const getEmail=localStorage.getItem("emailData");
    const getPassword=localStorage.getItem("passwordData");
    const handleSubmit = ()=>{
      if(email.current.value==="abc@gmail.com"&&password.current.value==="123456"){
        localStorage.setItem("emailData","abc@gmail.com")
        localStorage.setItem("passwordData","123456")
      }
    }
  return (
  <>
    {
      getEmail&&getPassword?<Movies/>:
      <div className='form'>
      <form onSubmit={handleSubmit} className="login">
      <label>E-mail</label>
      <input type="email" ref={email}/>
      <label>Password</label>
      <input type="password" ref={password} />
      <button className='butn' type="submit">Login</button>
      </form>
      <button className='link-button' onClick={()=> props.onFormSwitch('register')}>Don't have Account? Register</button>
    </div>
    }</>
   
  )
}

export default Login