'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Bar from './Bar'

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Hamburger = ({ isOpen, setIsOpen }: Props) => {
    //const [isOpen, setIsOpen] = React.useState(false)

    return (
        <button
            type='button'
            className='md:hidden'
            onClick={() => setIsOpen(prev => !prev)}
        >
            <div className='relative w-[28px] h-[28px]'>
                <Bar
                    position='top'
                    className={isOpen ? `w-[15px] translate-x-[5px] translate-y-0 rotate-45` : ''}
                />
                <Bar
                    position='middle'
                    className={isOpen ? `w-[15px] translate-x-1/2 scale-x-0 opacity-0` : ''}
                />
                <Bar
                    position='bottom'
                    className={isOpen ? `w-[15px] translate-x-[5px] translate-y-0 -rotate-45` : ''}
                />
            </div>
        </button>
    )
}

export default Hamburger
