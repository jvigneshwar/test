import React from 'react'
import "./Section2.css"

const Section2 = ({ section }) => {
  return (
    <div className='section-2'>
      <div className={section === 2 ? 'section-2-i section-2-i-active' : 'section-2-i'}>
        <div className='section-2-head'>We offer carefully crafted 4 courses</div>
        <div className='section-2-text'>At humming birds we offer carefully crafted courses that nourish the kids creativity and boostens their senses. At humming birds we offer carefully crafted courses that nourish the kids creativity and boostens their senses.</div>
        <div className='section-2-button'>Enroll now</div>
      </div>
    </div>
  )
}

export default Section2