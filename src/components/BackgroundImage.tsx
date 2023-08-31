import React from 'react'

const Fragment = React.Fragment

const BackgroundImage = () => {
    return (
        <Fragment>
            <div
                id='backgroundImage'
                className='fixed top-0 left-0 -z-10 bg-img w-screen h-screen bg-cover'
            />
        </Fragment>
    )
}

export default BackgroundImage
