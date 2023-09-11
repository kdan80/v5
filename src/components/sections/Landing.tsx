import React from 'react'
import Section from './Section'
import Link from 'next/link'
import BigButton from '../BigButton'

const Landing = () => {
    //const [pageLoadAnimationsComplete, setPageLoadAnimationsComplete] = React.useState(false)

    return (
        <Section id='landing'>
            <div className='section-container flex flex-col justify-between gap-6'>
                <h1 className='text-green font-mono text-landingH1 mb-2'>Hi, my name is</h1>
                <h2 className='font-semibold leading-[.9] text-landingH2 text-light-100'>
                    Kieran Dansey.
                </h2>
                <h3 className='font-semibold leading-[.9] text-landingH2 text-light-900'>
                    I build things for the web.
                </h3>
                <p className='md:max-w-[60%] text-light-900 leading-[1.5rem] text-lg'>
                    I am a freelance web developer, and occasional designer, with a passion for
                    building exceptional digital experiences.
                </p>

                <div className='mt-8'>
                    <BigButton>
                        <a href='#projects'>View My Projects</a>
                    </BigButton>
                </div>
            </div>
        </Section>
    )
}

export default Landing
