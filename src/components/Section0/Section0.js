import React, { useEffect, useRef } from 'react'
import "./Section0.css"
import { Icon } from '@iconify/react';

const Section0 = ({ loadingVideo, setLoadingVideo, section, setSection, videoLoaded, setVideoLoaded }) => {
    const videoRef0 = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    useEffect(() => {
        console.log("hi");
        if (videoLoaded.length === 4) {
            videoRef0.current.play();
        }
    }, [videoLoaded])

    useEffect(() => {
        if (section === 2) {
            videoRef2.current.play();
        }
        if(section === 3){
            videoRef3.current.play();
        }
    }, [section])

    const handleEnded = () => {
        setLoadingVideo(false)
        videoRef1.current.play();
    }

    const handleTimeUpdate = () => {
        const currentTime = videoRef0.current.currentTime;
        if (currentTime >= 2) {
            setSection(0)
        }
    }

    return (
        <>
            <div className={`video-1 video-1-s${section}`}>
                <video
                    ref={videoRef3}
                    muted
                    loop
                    onLoadedData={() => setVideoLoaded(pre => [...pre, true])}
                    className='video-inner-3'
                >
                    <source src={require("../../video-3.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={videoRef2}
                    muted
                    loop
                    onLoadedData={() => setVideoLoaded(pre => [...pre, true])}
                    className='video-inner-2'
                >
                    <source src={require("../../video-2.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={videoRef1}
                    muted
                    loop
                    onLoadedData={() => setVideoLoaded(pre => [...pre, true])}
                    className='video-inner-1'
                >
                    <source src={require("../../video-1.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={loadingVideo ? "video-0" : "video-0-hide"}>
                <video
                    ref={videoRef0}
                    muted
                    onLoadedData={() => setVideoLoaded(pre => [...pre, true])}
                    onEnded={handleEnded}
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={require("../../video-0.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={section === 0 ? "section-0 section-0-active" : "section-0"}>
                <p id="section-0-t1">Hummingbird’s Academy of Learning</p>
                <p id="section-0-t2">Where students are bestowed to<br /> excellence</p>
                <div className={`know-more km-${section}`}>
                    <p>Know more</p>
                    <Icon icon="ep:arrow-down-bold" />
                </div>
            </div>
        </>
    )
}

export default Section0