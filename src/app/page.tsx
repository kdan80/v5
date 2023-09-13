import React from 'react'
import { Header } from '@/components'
import { Landing } from '@/sections'

const Home = () => {
    return (
        <main className='text-light-200 min-h-screen max-w-screen overflow-x-hidden'>
            <Header />
            <Landing />
            <div className='h-screen w-full flex items-center justify-center'>Hello 2</div>
            <div className='h-screen w-full flex items-center justify-center'>Hello 3</div>
        </main>
    )
}

export default Home
