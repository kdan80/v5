import React from 'react'
import { section } from '@/styles'

const NotFound = () => {
    return (
        <div className={`${section} text-lg`}>
            <span className='text-green'>404&nbsp;&nbsp;</span>
            <span className='text-light-600'>|&nbsp;&nbsp;not found</span>
        </div>
    )
}

export default NotFound
