import React from 'react'
import { siteConfig } from '@/config'

const NavLinks = () => {
    return (
        <nav className='flex gap-8 mr-8'>
            {siteConfig.navLinks.map((navLink, index) => (
                <a
                    className='text-sm text-light-300 md:text-light-200 hover:text-green font-mono transition-colors ease-in-out duration-500'
                    href={navLink.url}
                >
                    <span className='text-green text-xs align-baseline'>0{index}.&nbsp;</span>
                    <span className='align-baseline'>{navLink.name}</span>
                </a>
            ))}
        </nav>
    )
}

export default NavLinks
