import React, { useEffect, useRef, useState } from 'react'
import "./Scrollable.css"

const Scrollable = ({ section, setSection }) => {

    const scrollRef = useRef(null);
    const [canScroll, setCanScroll] = useState(false);
    useEffect(() => {
        if (section === 0) {
            setCanScroll(true)
        }
    }, [section])

    useEffect(() => {
        if (canScroll) {
            scrollRef.current.scrollTop = (scrollRef.current.scrollHeight - scrollRef.current.clientHeight) / 2;
        }
    }, [canScroll])

    const handleScroll = (e) => {
        let scrollPos = Math.ceil(e.target.scrollTop);
        let maxScroll = null
        if (scrollRef.current) {
            maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
        }
        console.log(scrollPos + " " + maxScroll);
        if (scrollPos === 0 && canScroll) {
            if (section > 0) {
                setSection(pre => pre - 1)
                setCanScroll(false)
                setTimeout(() => {
                    setCanScroll(true)
                }, 2000)
            }
        } else if (scrollPos === maxScroll && canScroll) {
            if (section < 6) {
                setSection(pre => pre + 1)
                setCanScroll(false)
                setTimeout(() => {
                    setCanScroll(true)
                }, 2000)
            }
        }
    }

    return (
        <>
            <div className={canScroll ? 'scrollable-div' : 'scrollable-div-hide'} ref={scrollRef} onScroll={(e) => { handleScroll(e) }}>
                <div className='scrollable'></div>
            </div>
        </>
    )
}

export default Scrollable