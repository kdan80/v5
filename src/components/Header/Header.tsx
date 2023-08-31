import React from 'react'
import NavLink from './NavLinks'
import { siteConfig } from '@/config'

const Header = () => {
    return (
        <header className='fixed top-0 w-full p-[5vw] md:px-12 md:py-10 flex justify-between items-center'>
            <a
                href='#landing'
                className='text-white text-lg hover:text-green font-sans'
            >
                <span className='text-green '>&lt;/&gt;&nbsp;</span>
                <span className='transition-colors ease-in-out duration-500'>kieran dansey</span>
            </a>
            <nav className='hidden md:flex gap-8'>
                {siteConfig.navLinks.map((link, index) => (
                    <NavLink
                        index={index + 1}
                        url={link.url}
                        name={link.name}
                    />
                ))}
            </nav>
        </header>
    )
}

export default Header
