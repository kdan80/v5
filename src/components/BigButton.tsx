import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
}

const BigButton = ({ children, className }: Props) => {
    return (
        <button
            type='button'
            className={`text-green border border-green rounded text-sm font-mono transition-all duration-300 ease-in-out hover:bg-heroHover focus:bg-heroHover active:bg-heroHover ${className}`}
        >
            {children}
        </button>
    )
}

export default BigButton
