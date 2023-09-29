'use client'

import React from 'react'
import { bigButton, hamburgerBar } from '@/styles'
import { siteConfig } from '@/config'
import useScrollDirection from '../../useScrollDirection'

interface Props {
    scrolledToTop: boolean
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ scrolledToTop, isOpen, setIsOpen }: Props) => {
    const scrollDirection = useScrollDirection()

    return (
        <header
            // prettier-ignore
            className={`z-50 fixed w-full h-[80px] md:h-[100px] px-6 lg:px-12 flex items-center justify-between transition duration-300 ease-in-out 
                ${!isOpen && !scrolledToTop && 'backdrop-blur-md shadow-x bg-[#151718dd]'} 
                ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
            `}
        >
            <a
                id='homeLink'
                href='#landing'
                className={`opacity-0 text-white text-sm hover:text-green font-sans ${
                    isOpen && 'invisible'
                }`}
            >
                <span className='text-green '>&lt;/&gt;&nbsp;&nbsp;</span>
                <span className='transition-colors ease-in-out duration-500'>kieran dansey</span>
            </a>

            <nav className='hidden md:flex flex items-center gap-8 mr-8'>
                {siteConfig.navLinks.map(navLink => (
                    <a
                        key={navLink.id}
                        className='navLink opacity-0 text-sm text-light-300 md:text-light-200 hover:text-green font-mono transition-colors ease-in-out duration-500'
                        href={navLink.url}
                    >
                        <span className='text-green text-xs align-baseline'>
                            0{navLink.id}.&nbsp;
                        </span>
                        <span className='align-baseline'>{navLink.name}</span>
                    </a>
                ))}
                <a
                    id='downloadCV'
                    className={`navLink opacity-0 px-4 py-2 ${bigButton}`}
                >
                    Download CV
                </a>
            </nav>

            <button
                id='hamburger'
                type='button'
                className='md:hidden opacity-0 w-[28px] h-[28px]'
                onClick={() => setIsOpen(prev => !prev)}
            >
                <div className='relative w-full h-full'>
                    <div
                        className={`${hamburgerBar}  ${
                            isOpen ? 'w-[15px] left-[4.5px] rotate-45' : 'w-full -translate-y-[9px]'
                        }  `}
                    />
                    <div
                        className={`${hamburgerBar} ${isOpen ? 'scale-x-0 opacity-0' : 'w-full'}`}
                    />
                    <div
                        className={`${hamburgerBar}  ${
                            isOpen ? 'w-[15px] left-[4.5px] -rotate-45' : 'w-full translate-y-[9px]'
                        }  `}
                    />
                </div>
            </button>
        </header>
    )
}

export default Header
