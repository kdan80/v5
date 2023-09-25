import React from 'react'
import useScrollDirection from '../useScrollDirection'
import useScrolledToTop from '../useScrolledToTop'

interface Props {
    children: React.ReactNode
}

const ClientLayout = ({ children }: Props) => {
    //const scrolledToTop = useScrolledToTop()
    const scrollDirection = useScrollDirection()

    return (
        <main className='text-light-200 min-h-screen max-w-screen overflow-x-hidden'>
            {children}
            <div className='h-screen w-full flex items-center justify-center'>Hello 2</div>
            <div className='h-screen w-full flex items-center justify-center'>Hello 3</div>
        </main>
    )
}

export default ClientLayout
