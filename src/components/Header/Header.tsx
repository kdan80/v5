import React from 'react'
import DownloadCV from './components/DownloadCV'
import { DropdownClientContext } from '..'
import HeaderBackdrop from './components/HeaderBackdrop'
import HeaderContainer from './components/HeaderContainer'
import HomeLink from './components/HomeLink'
import NavLinks from './components/NavLinks'
import FlexContainer from './components/FlexContainer'

const Header = () => {
    return (
        <HeaderContainer>
            {/* Client component */}
            <HeaderBackdrop />

            <HomeLink>kieran dansey</HomeLink>

            <FlexContainer>
                <NavLinks />
                <DownloadCV />
            </FlexContainer>

            {/* Client component */}
            <DropdownClientContext />
        </HeaderContainer>
    )
}

export default Header
