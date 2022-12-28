import React from 'react'
import image from '../img/shbucket.jpeg'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Naples Chat</span>
      <div className="user">
        <img src={image} alt="" />
        <span>John</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
export default Navbar 
