'use client'

import React from 'react'
import { Header } from '@/components'
import { About, Landing } from '@/sections'
import useScrolledToTop from '../useScrolledToTop'

const Home = async () => {
    const ref = React.useRef<HTMLSelectElement | null>(null)

    const scrolledToTop = useScrolledToTop(ref)

    React.useEffect(() => {
        console.log('scrolledToTop: ', scrolledToTop)
    }, [scrolledToTop])

    return (
        <main className='text-light-200 min-h-screen max-w-screen overflow-x-hidden'>
            <Header scrolledToTop={scrolledToTop} />
            <Landing ref={ref} />
            <About />
            {/* <Featured /> */}
            <div className='h-screen w-full flex items-center justify-center'>Hello 2</div>
            <div className='h-screen w-full flex items-center justify-center'>Hello 3</div>
        </main>
    )
}

export default Home
