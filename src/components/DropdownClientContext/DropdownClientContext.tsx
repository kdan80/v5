'use client'

import React from 'react'
import { Hamburger } from '@/icons'
import DropdownNav from './components/DropdownNav'
import FlexContainer from './FlexContainer'

const DropdownClientContext = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <FlexContainer>
            <DropdownNav
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Hamburger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </FlexContainer>
    )
}

export default DropdownClientContext
