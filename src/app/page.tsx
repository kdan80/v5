import React from 'react'
import { Header } from '@/components'

const Fragment = React.Fragment

const Home = () => {
    return (
        <Fragment>
            <Header />
            <div className='h-screen w-screen flex items-center justify-center'>Hello 1</div>
            <div className='h-screen w-screen flex items-center justify-center'>Hello 2</div>
            <div className='h-screen w-screen flex items-center justify-center'>Hello 3</div>
        </Fragment>
    )
}

export default Home
