import React from 'react'

// This hook keeps track of scroll direction to be used in animations elsewhere.
// It uses framer motions useScroll hook to get the y scroll positon and compares it
// with the previous value. If the difference between the values is positive we are scrolling
// down, if negative we are scrolling up.

type ScrollDirection = 'up' | 'down'

const useScrollDirection = (): ScrollDirection => {
    const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>('up')

    React.useEffect(() => {
        let lastScrollY: number = window.scrollY
        let ticking: boolean = false

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY
            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
            lastScrollY = currentScrollY > 0 ? currentScrollY : 0
            return (ticking = false)
        }

        const unsubscribeScrollY = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => updateScrollDirection())
                ticking = true
            }
        }

        window.addEventListener('scroll', updateScrollDirection)

        return () => unsubscribeScrollY()
    }, [])

    return scrollDirection
}

export default useScrollDirection
