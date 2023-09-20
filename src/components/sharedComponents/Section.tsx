import React from 'react'

interface Props {
    children: React.ReactNode
    id?: string
}

const Section = ({ children, id }: Props) => {
    return (
        <section
            id={id}
            className='flex justify-center items-center min-h-screen px-6 md:px-12 w-screen border'
        >
            <div className='flex flex-col justify-between gap-6 font-sans border'>{children}</div>
        </section>
    )
}

export default Section
