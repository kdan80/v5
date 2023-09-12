import React from 'react'
import { HTMLTag, BorderColor } from './widget.types'

interface Props {
    className?: string
    children?: React.ReactNode
    borderColor?: BorderColor
    as?: HTMLTag
}

//prettier-ignore
export interface IBorderColors {
    red: 'border-[#ff0000]'
    green: 'border-[#00ff00]'
    blue: 'border-[#0000ff]'
    yellow: 'border-[#ffff00]'
    white: 'border-[#ffffff'
    black: 'border-[#000000]'
    purple: 'border-[#ff00ff]'
}

//prettier-ignore
const borderColors: IBorderColors = {
    red: 'border-[#ff0000]',
    green: 'border-[#00ff00]',
    blue: 'border-[#0000ff]',
    yellow: 'border-[#ffff00]',
    white: 'border-[#ffffff',
    black: 'border-[#000000]',
    purple: 'border-[#ff00ff]',
} as const

const BaseWidget = ({ className, children, borderColor, as }: Props) => {
    const Component = as || 'div'

    //prettier-ignore
    // This is required to prevent class='undefined' polluting the final html
    const classes =
        (className ? className : '') +
        (borderColor ? ' ' + `border-2 ${borderColors[borderColor as keyof IBorderColors]}` : '')

    // This is required to prevent class='' polluting the final html
    if (!classes) return <Component>{children}</Component>

    return <Component className={classes}>{children}</Component>
}

export default BaseWidget
