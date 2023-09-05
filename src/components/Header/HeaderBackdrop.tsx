'use client'

import React from 'react'

const HeaderBackdrop = () => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) return setScrolledToTop(window.scrollY < 100)
            return setScrolledToTop(window.scrollY === 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={`fixed top-0 left-0 -z-10 w-full h-[100px] transition ease-in-out duration-300 ${
                scrolledToTop ? '' : 'backdrop-blur-sm bg-[#15171888]'
            }`}
        ></div>
    )
}

export default HeaderBackdrop
