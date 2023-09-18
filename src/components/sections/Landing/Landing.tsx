'use client'

import React from 'react'
import { Section } from '@/sharedComponents'
import Link from 'next/link'
import { BigButton } from '@/sharedComponents'

const Landing = () => {
    const [pageLoaded, setPageLoaded] = React.useState(false)

    React.useEffect(() => {
        setPageLoaded(true)
    }, [])

    return (
        <Section id='landing'>
            <h1
                className={`text-green font-mono text-landingH1 mb-2 transition ease-in-out duration-300 opacity-0 translate-y-[20px] ${
                    pageLoaded ? 'translate-y-[0] opacity-100' : ''
                }`}
            >
                Hi, my name is
            </h1>
            <h2 className='font-semibold leading-[.9] text-landingH2 text-light-100'>
                Kieran Dansey.
            </h2>
            <h3 className='font-semibold leading-[.9] text-landingH2 text-light-900'>
                I build things for the web.
            </h3>
            <p className='md:max-w-[60%] text-light-900 leading-[1.5rem] text-lg'>
                I am a freelance web developer, and occasional designer, with a passion for building
                exceptional digital experiences.
            </p>

            <div className='mt-8'>
                <BigButton className='px-6 py-4'>
                    <a href='#projects'>View My Projects</a>
                </BigButton>
            </div>
        </Section>
    )
}

export default Landing
