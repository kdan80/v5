import React from 'react'

interface Props {
    children: React.ReactNode
}

const HeaderContainer = ({ children }: Props) => {
    return (
        <header className='fixed w-full h-[80px] md:h-[100px] px-6 md:px-12 flex items-center justify-between'>
            {children}
        </header>
    )
}

export default HeaderContainer
