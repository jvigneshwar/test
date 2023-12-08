import React from 'react'
import "./Section5.css"

const Section5 = ({ section, setVideoLoaded }) => {
    return (
        <>
            <div className={`video-5 video-5-s${section}`}>
                <video
                    muted
                    autoPlay
                    loop
                    onLoadedData={() => setVideoLoaded(pre => ({...pre, "5":true}))}

                >
                    <source src={require("../../video-5.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`section-5 section-5-s${section}`}>
                <div className='section-5-inner'>
                    <div className='section-5-title'>Course 3</div>
                    <div className='section-5-head'>LKG</div>
                    <div className='section-5-text'>
                    In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.
                    </div>
                    <div className='section-5-age-box'>
                        <div className='section-5-age-group'>Age Group</div>
                        <div className='section-5-age'>1.5 - 2.5 Years*</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Section5