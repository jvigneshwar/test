import React from 'react'
import "./Section3.css"

const Section3 = ({section}) => {
  return (
    <div className={`section-3 section-3-s${section}`}>
        <div className='section-3-inner'>
            <div className='section-3-title'>Course 1</div>
            <div className='section-3-head'>Playgroup</div>
            <div className='section-3-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
            <div className='section-3-age-box'>
              <div className='section-3-age-group'>Age Group</div>
              <div className='section-3-age'>1.5 - 2.5 Years*</div>
            </div>
            <div className='section-3-button'>Enroll</div>
            <img src={require("../../arrow.png")} alt="arrow" id="section-3-arrow"/>
        </div>
    </div>
  )
}

export default Section3