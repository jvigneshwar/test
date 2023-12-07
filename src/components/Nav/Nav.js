import React from 'react'
import "./Nav.css"

const Nav = ({section}) => {
  return (
    <div className={section > 0 ? 'nav nav-active' : 'nav'}>
        <img alt='logo' src={require("../../logo.png")} className='nav-logo'/>
        <div className='nav-links'>
            {/* <div className='nav-link'>{section}</div> */}
            <div className='nav-link'>Programs</div>
            <div className='nav-link'>Gallery</div>
            <div className='nav-link'>Contact Us</div>
        </div>
    </div>
  )
}

export default Nav