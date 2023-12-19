import React from 'react'
import "./Nav.css"

const Nav = ({section}) => {
  return (
    <div className={`nav nav-s${section}`} id='nav-bar'>
        <img alt='logo' src={require("../../logo.png")} className='nav-logo'/>
        <div className='nav-links'>
            {/* <div className='nav-link'>{section}</div> */}
            <div className='nav-link'>Gallery</div>
            <div className='nav-link'>Contact Us</div>
        </div>
    </div>
  )
}

export default Nav