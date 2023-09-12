import React from 'react'
import { HTMLTag } from './widget.types'

interface Props {
    className?: string
    children?: React.ReactNode
    debug?: true
    as?: HTMLTag
}

const BaseWidget = ({ className, children, as, debug }: Props) => {
    const Component = as || 'div'

    const debugClass = debug ? 'border-2 border-[#ff0000]' : ''

    return (
        <Component className={`text-light-200  ${debugClass} ${className}`}>{children}</Component>
    )
}

export default BaseWidget
