import React from 'react'
import './Header.css'
import { MdShoppingBasket } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import {  Link, Routes, Route } from "react-router-dom";

function Header(props) {

  return (

    <div className='header'>
        <Link to="/"><img src="src/assets/logo.png" className='header-img'/></Link>
        {props.loggedIn === true && 
            <div className='basket-container'>
              <Link to="/"><button onClick={props.logout} className='logout-button'>Logout</button></Link>
              <Link to='user'><FaUserAlt className='logo-basket'/> </Link>
              <Link to='basket'><MdShoppingBasket className='logo-basket'/> </Link>
            </div>
        }
    </div>


  )
}

export default Header