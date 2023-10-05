'use client'

import React from 'react'
import useScrolledToTop from '../../useScrolledToTop'
import { bigButton, section, sectionContent } from '@/styles'

interface Props {
    setScrolledToTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Landing = ({ setScrolledToTop }: Props) => {
    const sectionRef = React.useRef<HTMLSelectElement | null>(null)
    const scrolledToTop = useScrolledToTop(sectionRef)

    React.useEffect(() => {
        setScrolledToTop(scrolledToTop)
    }, [scrolledToTop])

    return (
        <section
            className={`${section}`}
            id='landing'
            ref={sectionRef}
        >
            <div className={`${sectionContent}`}>
                <h1 className='landing opacity-0 text-green font-mono text-landingH1 mb-2'>
                    Hi, my name is
                </h1>

                {/* Left margin of minus 3px is required to account for glyph padding in large fonts */}
                <h2 className='landing opacity-0 font-semibold -ml-[3px] leading-[.9] text-landingH2 text-light-100'>
                    Kieran Dansey.
                </h2>
                <h3 className='landing opacity-0 font-semibold -ml-[3px] leading-[.9] text-landingH2 text-light-900'>
                    I build things for the web.
                </h3>
                <p className='landing opacity-0 md:max-w-[60%] text-light-900 md:text-lg'>
                    I am a freelance web developer, and occasional designer, with a passion for
                    building exceptional digital experiences.
                </p>

                <a
                    className={`landing opacity-0 px-6 py-4 mt-8 self-start ${bigButton}`}
                    href='#projects'
                >
                    View My Projects
                </a>
            </div>
        </section>
    )
}

export default Landing
