import React from 'react'
import "./Section6.css"

const Section6 = ({ section, setVideoLoaded }) => {
    return (
        <>
            <div className={`video-6 video-6-s${section}`}>
                <video
                    muted
                    autoPlay
                    loop
                    onLoadedData={() => setVideoLoaded(pre => ({...pre, "6":true}))}

                >
                    <source src={require("../../video-6.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={`section-6 section-6-s${section}`}>
                <div className='section-6-inner'>
                    <div className='section-6-title'>Course 4</div>
                    <div className='section-6-head'>UKG</div>
                    <div className='section-6-text'>In the playgroup level, the young learners develop their latent In the playgroup level, the young learners develop their latent language and math skills.</div>
                    <div className='section-6-age-box'>
                        <div className='section-6-age-group'>Age Group</div>
                        <div className='section-6-age'>1.5 - 2.5 Years*</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Section6