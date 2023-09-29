import React from 'react'

// This hook keeps track of scroll direction to be used in animations elsewhere.
// It uses the window scrollY positon and compares it with the previous value.
// If the difference between the values is positive we are scrolling
// down, if negative we are scrolling up.
// It will only update if the users scrolls more than the THRESHOLD value in pixels

type ScrollDirection = 'up' | 'down'
const THRESHOLD = 50

const useScrollDirection = (): ScrollDirection => {
    const blocking = React.useRef(false)
    const lastScrollY = React.useRef(0)

    const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>('up')

    React.useEffect(() => {
        lastScrollY.current = window.scrollY

        const updateScrollDirection = () => {
            const scrollY = window.scrollY

            if (Math.abs(scrollY - lastScrollY.current) >= THRESHOLD) {
                setScrollDirection(scrollY > lastScrollY.current ? 'down' : 'up')
                lastScrollY.current = scrollY > 0 ? scrollY : 0
            }

            return (blocking.current = false)
        }

        const onScroll = () => {
            if (!blocking.current) {
                window.requestAnimationFrame(updateScrollDirection)
                blocking.current = true
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return scrollDirection
}

export default useScrollDirection
