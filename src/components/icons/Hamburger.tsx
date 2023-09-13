'use client'

import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

// To calculate the top offset value use this formula;
// ------------ (50% - (0.5 x height)) ------------
// eg if the div is 2px high then the calculation is 50%-1px
const defaultStyles = `absolute top-[calc(50%-1px)] h-[2px] rounded-[2px] bg-green transition ease-in-out duration-[250ms]`

const Hamburger = ({ isOpen, setIsOpen }: Props) => {
    return (
        <button
            type='button'
            className='w-[28px] h-[28px]'
            onClick={() => setIsOpen(prev => !prev)}
        >
            <div className='relative w-full h-full'>
                <div
                    className={`${defaultStyles}  ${
                        isOpen ? 'w-[15px] left-[4.5px] rotate-45' : 'w-full -translate-y-[9px]'
                    }  `}
                />
                <div className={`${defaultStyles} ${isOpen ? 'scale-x-0 opacity-0' : 'w-full'}`} />
                <div
                    className={`${defaultStyles}  ${
                        isOpen ? 'w-[15px] left-[4.5px] -rotate-45' : 'w-full translate-y-[9px]'
                    }  `}
                />
            </div>
        </button>
    )
}

export default Hamburger
