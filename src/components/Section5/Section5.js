import React, { useEffect, useRef } from 'react'
import "./Section5.css"

const Section5 = ({ section, setVideoLoaded }) => {

    const videoRef5 = useRef(null)

    useEffect(() => {
        if(section===4)
            videoRef5.current.pause();
        if(section === 5){
            // videoRef5.current.currentTime = 0;
            videoRef5.current.play();
        }
        if(section===6)
            videoRef5.current.pause();
    })

    return (
        <>
            <div className={`video-5 video-5-s${section}`}>
                <video
                    ref={videoRef5}
                    muted
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
                    <div className='section-5-button'>Enroll</div>
                    <img src={require("../../arrow.png")} alt="arrow" id="section-5-arrow" />
                </div>
            </div>
        </>
    )
}


export default Section5