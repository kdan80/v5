import React from 'react'
import { icon } from '@/styles'

interface Props {
    styles?: string
}

const LinkedIn = ({ styles }: Props) => {
    return (
        <svg
            className={`${icon} ${styles}`}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M 4.5,3 A 2.5,2.5 0 0 0 2,5.5 2.5,2.5 0 0 0 4.5,8 2.5,2.5 0 0 0 7,5.5 2.5,2.5 0 0 0 4.5,3 Z m 0,1.5 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 z M 15.5,8 A 6.5,6.5 0 0 0 9,14.5 V 24 h 1.5 3.5 v -1.5 -8 A 1.5,1.5 0 0 1 15.5,13 1.5,1.5 0 0 1 17,14.5 v 8 1.5 h 1.5 2 1.5 v -1.5 -8 A 6.5,6.5 0 0 0 15.5,8 Z m 0,1.5 a 5,5 0 0 1 5,5 v 8 h -2 v -8 a 3,3 0 0 0 -3,-3 3,3 0 0 0 -3,3 v 8 h -2 v -8 a 5,5 0 0 1 5,-5 z M 2,10 v 1.5 11 1.5 H 3.5 5.5 7 V 22.5 10 H 3.5 Z m 1.5,1.5 h 2 v 11 h -2 z' />
        </svg>
    )
}

export default LinkedIn
