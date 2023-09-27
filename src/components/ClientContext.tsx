'use client'

import React from 'react'
import { Landing } from './sections'
import { Header } from '@/components'
import useLandingAnimations from '../useLandingAnimations'

interface Props {
    children: React.ReactNode
}

const ClientContext = ({ children }: Props) => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)
    const landingAnimations = useLandingAnimations()

    React.useEffect(() => {
        landingAnimations()
    })

    return (
        <main className='text-light-200 min-h-screen max-w-screen overflow-x-hidden'>
            <Header scrolledToTop={scrolledToTop} />
            <Landing setScrolledToTop={setScrolledToTop} />
            {children}
            <footer className='flex justify-center items-center h-[6rem] -mt-[6rem]'>
                <span className='text-medium-200 text-sm'>
                    Designed &amp; Built by Kieran Dansey
                </span>
            </footer>
        </main>
    )
}

export default ClientContext
