import React from 'react'
import "./Section4.css"

const Section4 = ({ section, setVideoLoaded }) => {
    return (
        <>
            <div className={`video-4 video-4-s${section}`}>
                <video
                    muted
                    autoPlay
                    loop
                    onLoadedData={() => setVideoLoaded(pre => [...pre, true])}
                >
                    <source src={require("../../video-4.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`section-4 section-4-s${section}`}>
                <div className='section-4-inner'>
                    <div className='section-4-title'>Course 2</div>
                    <div className='section-4-head'>Kindergarten</div>
                    <div className='section-4-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
                    <div className='section-4-age-box'>
                        <div className='section-4-age-group'>Age Group</div>
                        <div className='section-4-age'>1.5 - 2.5 Years*</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4