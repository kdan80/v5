'use client'

import React from 'react'
import { Landing } from './sections'
import { Header } from '@/components'

interface Props {
    children: React.ReactNode
}

const ClientContext = ({ children }: Props) => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)

    return (
        <main className='text-light-200 min-h-screen max-w-screen overflow-x-hidden'>
            <Header scrolledToTop={scrolledToTop} />
            <Landing setScrolledToTop={setScrolledToTop} />
            {children}
        </main>
    )
}

export default ClientContext
