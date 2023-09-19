'use client'

import React from 'react'
import { Hamburger } from '@/icons'

const DropDownContainer = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className='border'>
            <Hamburger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}

export default DropDownContainer