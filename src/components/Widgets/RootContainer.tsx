import React from 'react'

interface Props {
    className?: string
    children?: React.ReactNode
    border?: 'red' | 'green' | 'blue' | 'yellow' | 'white' | 'black' | 'purple'
    as?: any
}

export interface IBorderColors {
    red: 'border-[#ff0000]'
    green: 'border-[#00ff00]'
    blue: 'border-[#0000ff]'
    yellow: 'border-[#ffff00]'
    white: 'border-[#ffffff'
    black: 'border-[#000000]'
    purple: 'border-[#ff00ff]'
}

const borderColors: IBorderColors = {
    red: 'border-[#ff0000]',
    green: 'border-[#00ff00]',
    blue: 'border-[#0000ff]',
    yellow: 'border-[#ffff00]',
    white: 'border-[#ffffff',
    black: 'border-[#000000]',
    purple: 'border-[#ff00ff]',
} as const

const RootContainer = ({ className, children, border, as }: Props) => {
    const Component = as || 'div'

    return (
        <Component
            // prettier-ignore
            className={`
                ${className}
                ${border ? `border-2 ${borderColors[border as keyof IBorderColors]}` : null
            }`}
        >
            {children}
        </Component>
    )
}

export default RootContainer
