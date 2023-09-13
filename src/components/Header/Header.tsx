import React from 'react'
import DownloadCV from './DownloadCV'
import { DropdownMenu } from '..'
import HeaderBackdrop from './HeaderBackdrop'
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
            <DropdownMenu />
        </HeaderContainer>
    )
}

export default Header
