import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      
      
   <NavLink to="/">
   Home
   
   </NavLink>
   
   
   <NavLink to='/pastes'>
    pastes
   </NavLink>


  
      
    </div>
  )
}

export default Navbar
