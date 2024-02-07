import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = ({ section }) => {
  return (
    <div className={`nav nav-s${section}`} id='nav-bar'>
      <img alt='logo' src={require("../../assets/logo.png")} className='nav-logo' />
      <div className='nav-links'>
        {/* <div className='nav-link'>{section}</div> */}
        <Link to="/gallery">
          <div className='nav1-link'>Gallery</div>
        </Link>
        <Link to="/gallery">
          <div className='nav-link'>Contact Us</div>
        </Link>
      </div>
    </div>
  )
}

export default Nav