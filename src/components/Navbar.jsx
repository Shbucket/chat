import React from 'react'
import image from '../img/shbucket.jpeg'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Naples Chat</span>
      <div className="user">
        <img src={image} alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}
export default Navbar 
