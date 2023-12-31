import React from 'react'
import "./SectionIndicator.css"

const SectionIndicator = ({section}) => {
  return (
    <div className={`section-indicator ${(section===-1 || section===0) && 'section-indicator-white'}`}>
        <div className={`bar ${section===0 ? 'bar-active' : ''}`}></div>
        <div className={`bar ${section===1 ? 'bar-active' : ''}`}></div>
        <div className={`bar ${section===2 ? 'bar-active' : ''}`}></div>
        <div className={`bar ${section===3 ? 'bar-active' : ''}`}></div>
        <div className={`bar ${section===4 ? 'bar-active' : ''}`}></div>
        <div className={`bar ${section===5 ? 'bar-active' : ''}`}></div>
        <div className={`bar ${section===6 ? 'bar-active' : ''}`}></div>
    </div>
  )
}

export default SectionIndicator