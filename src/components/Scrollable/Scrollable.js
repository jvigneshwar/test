import React, { useRef } from 'react'
import "./Scrollable.css"

const Scrollable = ({ section, setSection }) => {

    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        let scrollPos = Math.round(e.target.scrollTop);
        let maxScroll = null
        if (scrollRef.current) {
            maxScroll = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
        }
        console.log(scrollPos + " " +maxScroll);
        if (scrollPos === 0) {
            if (section > 0) {
                setSection(pre => pre - 1)
                setTimeout(() => {
                    e.target.scrollTop = 3;
                }, 2000)
            }
        } else if (scrollPos === maxScroll) {
            if (section < 6) {
                setSection(pre => pre + 1)
                setTimeout(() => {
                    e.target.scrollTop = 3;
                }, 2000)
            }
        }

    }

    return (
        <>
            <div className='scrollable-div' ref={scrollRef} onScroll={(e) => { handleScroll(e) }}>
                <div className='scrollable'></div>
            </div>
        </>
    )
}

export default Scrollable