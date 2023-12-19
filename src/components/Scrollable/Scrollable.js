import React, { useEffect, useRef } from 'react';

const Scrollable = ({ setSection }) => {
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

    const mouseWheelHandler = (e) => {
        const value = e.wheelDelta || -e.deltaY || -e.detail;
        const delta = Math.max(-1, Math.min(1, value));
        let curTime = new Date().getTime()
        console.log(curTime - lastSectionChange.current);
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
    }, []);


    return <></>
}

export default Scrollable;


