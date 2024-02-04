import React, { useEffect, useRef, useState } from 'react'
import "./Section0.css"
import { Icon } from '@iconify/react';

const Section0 = ({ loadingVideo, setLoadingVideo, section, setSection, videoLoaded, setVideoLoaded }) => {
    const [loading, setLoading] = useState(true)
    const [loadLength, setLoadLength] = useState(0)
    const videoRef0 = useRef(null);
    const videoRef00 = useRef(null);
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    useEffect(() => {
        let c = 0;
        for (let i = 0; i < 3; i++) {
            if (videoLoaded[i] === true) {
                c++;
            }
        }
        // console.log(c);
        setLoadLength(c);

        if (videoLoaded["0"] === true && videoLoaded["1"] === true && videoLoaded["2"] === true && videoLoaded["3"] === true && videoLoaded["4"] === true) {
            setTimeout(() => {
                videoRef0.current.play();
                setLoading(false)
            }, 1000)
        }
    }, [videoLoaded])

    useEffect(() => {
        const element = document.getElementById('nav-bar');
        const element1 = document.getElementById('nav-bar1');
        element.classList.add('animate-nav');
        element1.classList.add('animate-nav');
        const timeoutId = setTimeout(() => {
            element.classList.remove('animate-nav');
            element1.classList.remove('animate-nav');
        }, 2000);

        if (section === 0) {
            videoRef00.current.play();
            videoRef1.current.pause();
        }
        if (section === 1) {
            videoRef00.current.pause();
            videoRef1.current.currentTime = 0;
            videoRef1.current.play();
            videoRef2.current.pause();
        }
        if (section === 2) {
            videoRef2.current.play();
            videoRef1.current.pause();
            videoRef3.current.pause();
        }
        if (section === 3) {
            videoRef3.current.play();
            videoRef2.current.pause();
        }
        if (section === 4) {
            videoRef3.current.pause();
        }

        return () => clearTimeout(timeoutId);
    }, [section])

    const handleEnded = () => {
        setLoadingVideo(false)
        videoRef00.current.play();
    }

    const handleTimeUpdate = () => {
        const currentTime = videoRef0.current.currentTime;
        if (currentTime > 1.5) {
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
                    onLoadedData={() => setVideoLoaded(pre => ({ ...pre, "1": true }))}
                    className='video-inner-3'
                >
                    <source src={require("../../assets/video-3.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={videoRef2}
                    muted
                    loop
                    onLoadedData={() => setVideoLoaded(pre => ({ ...pre, "2": true }))}
                    className='video-inner-2'
                >
                    <source src={require("../../assets/video-2.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={videoRef1}
                    muted
                    // loop
                    onLoadedData={() => setVideoLoaded(pre => ({ ...pre, "3": true }))}

                    className='video-inner-1'
                >
                    <source src={require("../../assets/video-1.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    ref={videoRef00}
                    muted
                    loop
                    onLoadedData={() => setVideoLoaded(pre => ({ ...pre, "4": true }))}
                    className='video-inner-0'
                >
                    <source src={require("../../assets/video-00.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={loadingVideo ? "video-0" : "video-0-hide"}>
                <video
                    ref={videoRef0}
                    muted
                    onLoadedData={() => setVideoLoaded(pre => ({ ...pre, "0": true }))}
                    onEnded={handleEnded}
                    onTimeUpdate={handleTimeUpdate}
                >
                    <source src={require("../../assets/video-0.mp4")} type="video/mp4" />
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
            <div className={loading ? 'loading' : 'loading loading-hide'}>
                <img src={require("../../assets/logo.png")} alt="logo" />
                <div className='progress'>
                    <div className={
                        `progress-inner progress-${loadLength}`
                    }></div>
                </div>
            </div>
        </>
    )
}

export default Section0