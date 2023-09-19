import React from 'react'
import { BigButton } from '@/sharedComponents'
import { bigButton } from '@/styles'
import { DropdownClientContext } from '..'
import HeaderBackdrop from './components/HeaderBackdrop'
import HeaderContainer from './components/HeaderContainer'
import HomeLink from './components/HomeLink'
import { siteConfig } from '@/config'

const Header = () => {
    return (
        <HeaderContainer>
            {/* Client component */}
            <HeaderBackdrop />

            <HomeLink>kieran dansey</HomeLink>

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
        </HeaderContainer>
    )
}

export default Header
