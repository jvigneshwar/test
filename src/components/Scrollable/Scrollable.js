import React, { useEffect, useRef } from 'react';

const Scrollable = ({ setSection, section }) => {
    const lastSectionChange = useRef(new Date().getTime());

    const handleKeyPress = (event) => {
        let curTime = new Date().getTime()
        if (event.key === 'ArrowUp') {
            setSection(pre => {
                if (pre > 0 && curTime - lastSectionChange.current >= 2000) {
                    lastSectionChange.current = curTime
                    return pre - 1
                }
                else
                    return pre
            })
        } else if (event.key === 'ArrowDown') {
            setSection(pre => {
                if (pre < 6 && curTime - lastSectionChange.current >= 2000) {
                    lastSectionChange.current = curTime
                    return pre + 1
                }
                else
                    return pre
            })
        }
    }

    const handleNextTouch = () => {
        let curTime = new Date().getTime()
        setSection(pre => {
            if (pre < 6 && curTime - lastSectionChange.current >= 2000) {
                lastSectionChange.current = curTime
                return pre + 1
            }
            else
                return pre
        })
    }

    const handlePreviousTouch = () => {
        let curTime = new Date().getTime()
        setSection(pre => {
            if (pre > 0 && curTime - lastSectionChange.current >= 2000) {
                lastSectionChange.current = curTime
                return pre - 1
            }
            else
                return pre
        })
    }

    const mouseWheelHandler = (e) => {
        const value = e.wheelDelta || -e.deltaY || -e.detail;
        const delta = Math.max(-1, Math.min(1, value));
        let curTime = new Date().getTime()
        if (delta < 0) {
            setSection(pre => {
                if (pre < 6 && curTime - lastSectionChange.current >= 2000) {
                    lastSectionChange.current = curTime
                    return pre + 1
                }
                else
                    return pre
            })
        } else {
            setSection(pre => {
                if (pre > 0 && curTime - lastSectionChange.current >= 2000) {
                    lastSectionChange.current = curTime
                    return pre - 1
                }
                else
                    return pre
            })
        }
    }

    useEffect(() => {
        document.addEventListener('wheel', mouseWheelHandler);
        document.addEventListener("keydown", handleKeyPress)
        return () => {
            document.removeEventListener('wheel', mouseWheelHandler);
            document.removeEventListener("keydown", handleKeyPress)
        };
        // eslint-disable-next-line
    }, []);


    return (
        <div className={`sections-nav-controls ${section === -1 && 'sections-nav-controls-none'}  ${section === 0 && 'sections-nav-controls-white'}`}>
            <div className='section-nav-btn' onClick={() => handlePreviousTouch()}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m14 7l-5 5m0 0l5 5" /></svg></div>
            <div className='section-nav-btn section-nav-btn-right' onClick={() => handleNextTouch()}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m10 17l5-5m0 0l-5-5" /></svg></div>
        </div>
    )
}

export default Scrollable;


