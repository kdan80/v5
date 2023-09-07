import React from 'react'
import NavLink from './NavLinks'
import { siteConfig } from '@/config'
import DownloadCV from './DownloadCV'
import { DropdownMenu } from '..'
import HeaderBackdrop from './HeaderBackdrop'

const Header = () => {
    return (
        <header className='fixed w-full h-[80px] md:h-[100px] px-6 md:px-12 flex justify-between items-center'>
            {/* Client component */}
            <HeaderBackdrop />
            <a
                href='#landing'
                className='text-white text-lg md:text-sm hover:text-green font-sans'
            >
                <span className='text-green '>&lt;/&gt;&nbsp;&nbsp;</span>
                <span className='transition-colors ease-in-out duration-500'>kieran dansey</span>
            </a>
            <div className='hidden md:flex items-center'>
                <nav className='flex gap-8 mr-8'>
                    {siteConfig.navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            index={index + 1}
                            url={link.url}
                            name={link.name}
                        />
                    ))}
                </nav>
                <DownloadCV />
            </div>
            {/* Client component */}
            <DropdownMenu />
        </header>
    )
}

export default Header
