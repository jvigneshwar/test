import React, { useRef, useEffect } from 'react';
import "./Scrollable.css"

const Scrollable = ({ section, setSection }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const debounce = (func, delay, immediate) => {
            let timeoutId;

            return function (...args) {
                const context = this;

                const later = () => {
                    timeoutId = null;
                    if (!immediate) {
                        func.apply(context, args);
                    }
                };

                const callNow = immediate && !timeoutId;

                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                timeoutId = setTimeout(later, delay);

                if (callNow) {
                    func.apply(context, args);
                }
            };
        };

        const handleWheel = debounce((event) => {
            if (event.deltaY <= 0) {
                if(section>0) 
                    setSection(pre => pre - 1)
            }
            else {
                if(section<6)
                    setSection(pre => pre + 1)
            }
        }, 300, true);

        const container = containerRef.current;

        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    },[]);

    return (
        <div
            ref={containerRef}
            className='scrollable-div'
        ></div>
    );
};

export default Scrollable;



// import React, { useState } from 'react'
// import "./Scrollable.css"
// import { useEffect } from 'react'

// const Scrollable = ({ section, setSection }) => {

//     const [showScroll, setShowScroll] = useState(false)

//     useEffect(() => {
//         if (section === 0)
//             setShowScroll(true)
//     }, [section])

//     const handleScroll = (e) => {
//         if (e.target.scrollTop === 0) {
//             if (section > 0) {
//                 setSection(pre => pre - 1)
//                 setTimeout(() => {
//                     e.target.scrollTop = 3;
//                 }, 2000)
//             }
//         } else if (e.target.scrollTop === 6) {
//             if (section < 6) {
//                 setSection(pre => pre + 1)
//                 setTimeout(() => {
//                     e.target.scrollTop = 3;
//                 }, 2000)
//             }
//         }

//     }

//     return (
//         <>
//             <div className='scrollable-div' onScroll={(e) => { handleScroll(e) }}>
//                 {showScroll ? <div className='scrollable'></div> : <></>}
//             </div>
//         </>
//     )
// }

// export default Scrollable
