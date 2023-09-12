import React from 'react'
import { HTMLTag, BorderColor } from './widget.types'

interface Props {
    className?: string
    children?: React.ReactNode
    borderColor?: BorderColor
    debug?: true
    as?: HTMLTag
}

const BaseWidget = ({ className, children, borderColor, as, debug }: Props) => {
    const Component = as || 'div'

    //prettier-ignore
    // This is required to prevent class='undefined' polluting the final html
    const classes =
        (debug ? 'border-2 border-[#ff0000]' + ' ' : '') +
        (className ? className : '')

    // This is required to prevent class='' polluting the final html
    if (!classes) return <Component>{children}</Component>

    return <Component className={classes}>{children}</Component>
}

export default BaseWidget
