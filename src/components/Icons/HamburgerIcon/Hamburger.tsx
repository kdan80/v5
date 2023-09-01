import React from 'react'
import Bar from './Bar'

const Hamburger = () => {
    return (
        <button
            type='button'
            className=''
        >
            <div className='relative w-[28px] h-[28px]'>
                <Bar position='top' />
                <Bar position='middle' />
                <Bar position='bottom' />
            </div>
        </button>
    )
}

export default Hamburger
