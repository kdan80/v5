import React from 'react'
import { icon } from '@/styles'

interface Props {
    styles?: string
}

const External = ({ styles }: Props) => {
    return (
        <svg
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={`${styles} ${icon}`}
        >
            <path d='M 16.75 0 C 16.3345 0 16 0.3345 16 0.75 C 16 1.1655 16.3345 1.5 16.75 1.5 L 21.439453 1.5 L 12.466797 10.472656 C 12.172994 10.766459 12.172994 11.2394 12.466797 11.533203 C 12.7606 11.827006 13.233541 11.827006 13.527344 11.533203 L 22.5 2.5605469 L 22.5 7.25 C 22.5 7.6655 22.8345 8 23.25 8 C 23.6655 8 24 7.6655 24 7.25 L 24 0.75 C 24 0.7040168 23.994178 0.65888983 23.986328 0.61523438 C 23.985884 0.61276421 23.986796 0.60988343 23.986328 0.60742188 C 23.985698 0.60418257 23.985048 0.60088874 23.984375 0.59765625 C 23.975239 0.55278488 23.96203 0.51027528 23.945312 0.46875 C 23.926678 0.42246025 23.904006 0.37901779 23.876953 0.33789062 C 23.820876 0.25263937 23.747361 0.17912364 23.662109 0.12304688 C 23.620982 0.095994105 23.57754 0.073323149 23.53125 0.0546875 C 23.489725 0.037969962 23.447215 0.024760538 23.402344 0.015625 C 23.399187 0.014982238 23.39575 0.014275078 23.392578 0.013671875 C 23.390014 0.013173372 23.387334 0.014143312 23.384766 0.013671875 C 23.34111 0.0058217371 23.295983 0 23.25 0 L 16.75 0 z M 6.0507812 3 C 4.3740702 3 3 4.3740701 3 6.0507812 L 3 17.949219 C 3 19.62593 4.3740702 21 6.0507812 21 L 17.949219 21 C 19.62593 21 21 19.62593 21 17.949219 L 21 10 A 0.75 0.75 0 0 0 20.25 9.25 A 0.75 0.75 0 0 0 19.5 10 L 19.5 17.949219 C 19.5 18.820919 18.82092 19.5 17.949219 19.5 L 6.0507812 19.5 C 5.1790812 19.5 4.5 18.820919 4.5 17.949219 L 4.5 6.0507812 C 4.5 5.1790806 5.1790814 4.5 6.0507812 4.5 L 14 4.5 A 0.75 0.75 0 0 0 14.75 3.75 A 0.75 0.75 0 0 0 14 3 L 6.0507812 3 z ' />
        </svg>
    )
}

export default External
