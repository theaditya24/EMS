import React, { useState } from 'react'
import loginBg from './../images/login-bg.jpg'; // Import the image
const Login = ({handleLogin}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent form from submitting normally
    // handle form submission here
    // console.log('Email is', email);
    // console.log('Password is', password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center' 
    style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} >
      <div className='border-2 border-emerald-600 pt-16 pb-16 pr-20 pl-20 rounded-xl bg-zinc-800 shadow-lg shadow-cyan-500/50'>
        <h1 className='text-3xl mb-10 font-bold text-center'>WELCOME</h1>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} action="" className='mt-5 flex flex-col items-center justify-center gap-4'>
          <input required value={email} onChange={(e)=>{
            setEmail(e.target.value);
          }} className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="email" placeholder="Email" />
          <input required value={password} onChange={(e)=>{
            setPassword(e.target.value);
          }} className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400' type="password" placeholder="Password" />
          <button className='text-black outline-none border-none  bg-red-400 rounded-full py-2 px-12 text-xl text-white mt-6'>Log In </button>
        </form>
      </div>
      
    </div>
  )
}

export default Login