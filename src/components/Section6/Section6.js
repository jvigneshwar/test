import React, { useEffect, useRef } from 'react'
import "./Section6.css"

const Section6 = ({ section, setVideoLoaded }) => {

    const videoRef6 = useRef(null)

    useEffect(() => {
        if(section===5)
            if(videoRef6.current)
                videoRef6.current.pause();
        if(section === 6){
            if(videoRef6.current){
                videoRef6.current.currentTime = 0;
                videoRef6.current.play();
            }
        }
    })

    return (
        <>
            <div className={`video-6 video-6-s${section}`}>
                <video
                    ref={videoRef6}
                    muted
                    loop
                    preload='auto'
                    onLoadedData={() => setVideoLoaded(pre => ({...pre, "7":true}))}
                >
                    <source src='https://res.cloudinary.com/dqwfvbure/video/upload/f_auto:video,q_auto/v1/videos/video-6' type="video/mp4" />
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
                    <div className='section-6-button'>Enroll</div>
                    <img src={require("../../assets/arrow.png")} alt="arrow" id="section-6-arrow" />
                </div>
            </div>
        </>
    )
}


export default Section6