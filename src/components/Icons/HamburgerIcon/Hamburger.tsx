'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Bar from './Bar'

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Hamburger = ({ isOpen, setIsOpen }: Props) => {
    return (
        <button
            type='button'
            onClick={() => setIsOpen(prev => !prev)}
        >
            <div className='relative w-[28px] h-[28px]'>
                <Bar
                    position='top'
                    className={
                        isOpen ? `w-[14px] translate-x-[7px] translate-y-[.5px] rotate-45` : ''
                    }
                />
                <Bar
                    position='middle'
                    className={isOpen ? `w-[14px] translate-x-1/2 scale-x-0 opacity-0` : ''}
                />
                <Bar
                    position='bottom'
                    className={
                        isOpen ? `w-[14px] translate-x-[7px] translate-y-[.5px] -rotate-45` : ''
                    }
                />
            </div>
        </button>
    )
}

export default Hamburger
