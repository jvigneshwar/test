import React from 'react'
import "./Nav1.css"
import { Link } from 'react-router-dom'

const Nav1 = ({section}) => {
  return (
    <div className={`nav1 nav1-s${section}`} id='nav-bar1'>
        <img alt='logo' src={require("../../assets/logo.png")} className='nav1-logo'/>
        <div className='nav1-links'>
            {/* <div className='nav1-link'>{section}</div> */}
            <Link to="/gallery">
              <div className='nav1-link'>Gallery</div>
            </Link>
            <div className='nav1-link'>Contact Us</div>
        </div>
    </div>
  )
}

export default Nav1