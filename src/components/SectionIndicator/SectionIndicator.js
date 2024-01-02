import React from 'react'
import "./SectionIndicator.css"

const SectionIndicator = ({section}) => {
  return (
    <div className={`section-indicator ${(section===-1 || section===0) && 'section-indicator-white'}`}>
        <div className={`bar-active bar-active-${section}`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
        <div className={`bar`}></div>
    </div>
  )
}

export default SectionIndicator