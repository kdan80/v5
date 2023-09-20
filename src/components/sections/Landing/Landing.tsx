'use client'

import React from 'react'
import { Section } from '@/sharedComponents'
import { BigButton } from '@/sharedComponents'

const Landing = () => {
    const refs = React.useRef<HTMLElement[]>([])

    const pushToRefsArray = (el: HTMLElement | null) => {
        el && refs.current.push(el)
    }

    React.useLayoutEffect(() => {
        const fadeUpElements = refs.current

        fadeUpElements.forEach((element, index) => {
            element.animate(
                [
                    {
                        transform: 'translateY(20px)',
                        opacity: 0,
                    },
                    {
                        transform: 'translateY(0)',
                        opacity: 1,
                    },
                ],
                {
                    duration: 250,
                    fill: 'forwards',
                    easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
                    delay: index * 75,
                }
            )
        })
    }, [])

    return (
        <Section id='landing'>
            <h1
                ref={el => pushToRefsArray(el)}
                className='opacity-0 text-green font-mono text-landingH1 mb-2'
            >
                Hi, my name is
            </h1>

            {/* Left margin of minus 3px is required to account for glyph padding in large fonts */}
            <h2
                ref={el => pushToRefsArray(el)}
                className='opacity-0 font-semibold -ml-[3px] leading-[.9] text-landingH2 text-light-100'
            >
                Kieran Dansey.
            </h2>
            <h3
                ref={el => pushToRefsArray(el)}
                className='opacity-0 font-semibold -ml-[3px] leading-[.9] text-landingH2 text-light-900'
            >
                I build things for the web.
            </h3>
            <p
                ref={el => pushToRefsArray(el)}
                className='opacity-0 md:max-w-[60%] text-light-900 text-lg'
            >
                I am a freelance web developer, and occasional designer, with a passion for building
                exceptional digital experiences.
            </p>

            <div
                ref={el => pushToRefsArray(el)}
                className='opacity-0  mt-8'
            >
                <BigButton className='px-6 py-4'>
                    <a href='#projects'>View My Projects</a>
                </BigButton>
            </div>
        </Section>
    )
}

export default Landing
