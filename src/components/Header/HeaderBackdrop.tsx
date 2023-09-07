'use client'

import useScrolledToTop from '@/useScrolledToTop'

import React from 'react'

const HeaderBackdrop = () => {
    const scrolledToTop = useScrolledToTop()

    return (
        <div
            className={`fixed top-0 left-0 -z-10 w-full h-[80px] md:h-[100px] transition ease-in-out duration-300 ${
                scrolledToTop ? '' : 'backdrop-blur-sm shadow-x md:bg-[#15171888]'
            }`}
        ></div>
    )
}

export default HeaderBackdrop
