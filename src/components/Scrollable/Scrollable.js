import React, { useState } from 'react'
import "./Scrollable.css"
import { useEffect } from 'react'

const Scrollable = ({ section, setSection }) => {

    const [showScroll, setShowScroll] = useState(false)

    useEffect(() => {
        if (section === 0)
            setShowScroll(true)
    }, [section])

    const handleScroll = (e) => {
        if (e.target.scrollTop === 0) {
            if (section > 0) {
                setSection(pre => pre - 1)
                setTimeout(() => {
                    e.target.scrollTop = 3;
                }, 2000)
            }
        } else if (e.target.scrollTop === 6) {
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
            <div className='scrollable-div' onScroll={(e) => { handleScroll(e) }}>
                {showScroll ? <div className='scrollable'></div> : <></>}
            </div>
        </>
    )
}

export default Scrollable