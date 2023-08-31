import React from 'react'

interface Props {
    name: string
    url: string
    index: number
}

const NavLink = ({ index, name, url }: Props) => {
    return (
        <a
            className='text-sm text-light-300 md:text-light-200 hover:text-green font-mono transition-colors ease-in-out duration-500'
            href={url}
        >
            <span className='text-green text-xs align-baseline'>0{index}.&nbsp;</span>
            <span className='align-baseline'>{name}</span>
        </a>
    )
}

export default NavLink
