import React from 'react'
import BaseWidget from './BaseWidget'
import { HTMLTag, BorderColor } from './widget.types'

interface Props {
    children?: React.ReactNode
    className?: string
    as?: HTMLTag
    debug?: true
}

const Container = ({ children, className, as, debug }: Props) => {
    return (
        <BaseWidget
            className={`px-6 md:px-12 flex items-center ${className}`}
            as={as}
            debug={debug}
        >
            {children}
        </BaseWidget>
    )
}

export default Container
