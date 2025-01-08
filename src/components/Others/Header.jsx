import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  const logOutUser = ()=>{
    //localStorage.setItem('loggedInUser','')
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    //window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium'>Hello , <br /><span className='text-5xl font-semibold'>{props.data && props.data.firstName ? props.data.firstName : 'Admin'}👋</span></h1>
      <button onClick={logOutUser} className=' border-none font-medium  bg-red-400 rounded-full py-2 px-7 text-lg text-white'>Log Out</button>
    </div>
  )
}

export default Header