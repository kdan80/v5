'use client'

import React from 'react'
import { bigButton } from '@/styles'
import { DropdownClientContext } from '..'
import { siteConfig } from '@/config'
import useScrolledToTop from '../../useScrolledToTop'

const Header = () => {
    const scrolledToTop = useScrolledToTop()

    return (
        <header
            className={`fixed w-full h-[80px] md:h-[100px] px-6 md:px-12 flex items-center justify-between transition ease-in-out duration-300 ${
                scrolledToTop ? '' : 'backdrop-blur-sm shadow-x md:bg-[#15171888]'
            }`}
        >
            <a
                href='#landing'
                className='text-white text-lg md:text-sm hover:text-green font-sans'
            >
                <span className='text-green '>&lt;/&gt;&nbsp;&nbsp;</span>
                <span className='transition-colors ease-in-out duration-500'>kieran dansey</span>
            </a>

            <div className='hidden md:flex items-center'>
                <nav className='flex gap-8 mr-8'>
                    {siteConfig.navLinks.map(navLink => (
                        <a
                            className='text-sm text-light-300 md:text-light-200 hover:text-green font-mono transition-colors ease-in-out duration-500'
                            href={navLink.url}
                        >
                            <span className='text-green text-xs align-baseline'>
                                0{navLink.id}.&nbsp;
                            </span>
                            <span className='align-baseline'>{navLink.name}</span>
                        </a>
                    ))}
                </nav>
                <button
                    type='button'
                    className={`px-4 py-2 ${bigButton}`}
                >
                    Download CV
                </button>
            </div>

            {/* Client component */}
            <DropdownClientContext />
        </header>
    )
}

export default Header
