import React from 'react'

interface Props {
    children?: React.ReactNode
}

const FlexContainer = ({ children }: Props) => {
    return <div className='hidden md:flex items-center'>{children}</div>
}

export default FlexContainer
