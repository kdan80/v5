import React from 'react'
import NavLink from './NavLinks'
import { siteConfig } from '@/config'
import BigButton from '../BigButton'

const Header = () => {
    return (
        <header className='fixed top-0 w-full h-[100px] px-12 flex justify-between items-center'>
            <a
                href='#landing'
                className='text-white text-sm hover:text-green font-sans'
            >
                <span className='text-green '>&lt;/&gt;&nbsp;&nbsp;</span>
                <span className='transition-colors ease-in-out duration-500'>kieran dansey</span>
            </a>
            <div className='hidden md:flex items-center'>
                <nav className='flex gap-8 mr-8'>
                    {siteConfig.navLinks.map((link, index) => (
                        <NavLink
                            index={index + 1}
                            url={link.url}
                            name={link.name}
                        />
                    ))}
                </nav>
                <BigButton className='px-4 py-2'>Resume</BigButton>
            </div>
        </header>
    )
}

export default Header
