'use client'

import React from 'react'
import Hamburger from '../Icons/Hamburger'
import Dropdown from './DropdownNav'

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className='md:hidden flex items-center'>
            <Dropdown
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <Hamburger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}

export default DropdownMenu
