import React, { useEffect, useRef } from 'react'
import "./Section4.css"

const Section4 = ({ section, setVideoLoaded }) => {
    const videoRef4 = useRef(null)

    useEffect(() => {
        if (section === 3)
            if(videoRef4.current)
                videoRef4.current.pause();
        if (section === 4) {
            if(videoRef4.current){
                videoRef4.current.currentTime = 0;
                videoRef4.current.play();
            }
        }
        if (section === 5)
            if(videoRef4.current)
                videoRef4.current.pause();
    })

    return (
        <>
            <div className={`video-4 video-4-s${section}`}>
                <video
                    ref={videoRef4}
                    muted
                    loop
                    preload='auto'
                    onLoadedData={() => setVideoLoaded(pre => ({ ...pre, "5": true }))}
                >
                    <source src='https://res.cloudinary.com/dqwfvbure/video/upload/f_auto:video,q_auto/v1/videos/video-4'  type="video/mp4" />
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
                    <div className='section-4-button'>Enroll</div>
                    <img src={require("../../assets/arrow.png")} alt="arrow" id="section-4-arrow" />
                </div>
            </div>
        </>
    )
}

export default Section4