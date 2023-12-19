import React, { useEffect, useRef } from 'react';

const Scrollable1 = ({ setSection,isCooldown,setCooldown }) => {
    const prevTimeRef = useRef(new Date().getTime());
    const scrollingsRef = useRef(Array(150).fill(0));

    function getAverage(elements, number) {
        var sum = 0;
        var lastElements = elements.slice(Math.max(elements.length - number, 1));
        for (var i = 0; i < lastElements.length; i++) {
            sum = sum + lastElements[i];
        }
        return Math.ceil(sum / number);
    }

    useEffect(() => {
        const mouseWheelHandler = (e) => {
            const curTime = new Date().getTime();
            let controlPressed = false
            if (!controlPressed) {
                const value = e.wheelDelta || -e.deltaY || -e.detail;
                const delta = Math.max(-1, Math.min(1, value));

                const horizontalDetection =
                    typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                const isScrollingVertically =
                    Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
                    (Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection);

                if (scrollingsRef.current.length > 149) {
                    scrollingsRef.current.shift();
                }
                scrollingsRef.current.push(Math.abs(value));

                const timeDiff = curTime - prevTimeRef.current;
                prevTimeRef.current = curTime;

                if (timeDiff > 200) {
                    scrollingsRef.current = [];
                }

                if (!isCooldown) {
                    const averageEnd = getAverage(scrollingsRef.current, 10);
                    const averageMiddle = getAverage(scrollingsRef.current, 70);
                    const isAccelerating = averageEnd >= averageMiddle;
                    if (isAccelerating && isScrollingVertically) {
                        if (delta < 0) {
                            setSection(pre => {
                                if (pre < 6)
                                    return pre + 1
                                else
                                    return pre
                            })
                        } else {
                            setSection(pre => {
                                if (pre > 0)
                                    return pre - 1
                                else
                                    return pre
                            })
                        }
                        setCooldown(true)
                        setTimeout(() => {
                            setCooldown(false)
                        }, 1000)
                    }
                }

            }
        };

        document.addEventListener('wheel', mouseWheelHandler);

        return () => {
            document.removeEventListener('wheel', mouseWheelHandler);
        };
    }, [isCooldown]);

    return <></>;
};

export default Scrollable1;


