import React from 'react'

interface Props {
    children: React.ReactNode
}

const HomeLink = ({ children }: Props) => {
    return (
        <a
            href='#landing'
            className='text-white text-lg md:text-sm hover:text-green font-sans'
        >
            <span className='text-green '>&lt;/&gt;&nbsp;&nbsp;</span>
            <span className='transition-colors ease-in-out duration-500'>{children}</span>
        </a>
    )
}

export default HomeLink
