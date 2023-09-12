import React from 'react'
import BaseWidget from './BaseWidget'

interface Props {
    children?: React.ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <BaseWidget
            className='px-6 md:px-12 flex items-center'
            as='div'
        >
            {children}
        </BaseWidget>
    )
}

export default Container
