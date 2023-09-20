'use client'

import React from 'react'
import { bigButton } from '@/styles'
import { DropdownClientContext } from '..'
import { siteConfig } from '@/config'
import useScrolledToTop from '../../useScrolledToTop'
import { AnySrvRecord } from 'dns'

const Header = () => {
    const scrolledToTop = useScrolledToTop()

    const refs = React.useRef<HTMLElement[]>([])
    const homeLinkRef = React.useRef<HTMLAnchorElement | null>(null)

    const pushToRefsArray = (el: HTMLElement | null) => {
        el && refs.current.push(el)
    }

    React.useEffect(() => {
        const fadeDownElements = refs.current
        const homeLink = homeLinkRef.current

        if (!fadeDownElements || !homeLink) return

        let homeLinkAnimationDelay: number = 1100

        fadeDownElements.forEach((element, index) => {
            const animation = element.animate(
                [
                    {
                        transform: 'translateY(-100%)',
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
                    delay: 500 + index * 75,
                }
            )

            // prettier-ignore
            if (index === 2 && animation.effect) {
                homeLinkAnimationDelay = 
                    animation.effect.getComputedTiming().duration as number + 
                    animation.effect.getComputedTiming().delay! as number
            }
        })

        homeLink.animate(
            [
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            ],
            {
                duration: 250,
                fill: 'forwards',
                easing: 'ease-in-out',
                delay: homeLinkAnimationDelay + 200,
            }
        )
    }, [])

    return (
        <header
            className={`fixed w-full h-[80px] md:h-[100px] px-6 md:px-12 flex items-center justify-between transition ease-in-out duration-300 ${
                scrolledToTop ? '' : 'backdrop-blur-sm shadow-x md:bg-[#15171888]'
            }`}
        >
            <a
                ref={homeLinkRef}
                href='#landing'
                className='opacity-0 text-white text-lg md:text-sm hover:text-green font-sans'
            >
                <span className='text-green '>&lt;/&gt;&nbsp;&nbsp;</span>
                <span className='transition-colors ease-in-out duration-500'>kieran dansey</span>
            </a>

            <nav className='hidden md:flex flex items-center gap-8 mr-8'>
                {siteConfig.navLinks.map(navLink => (
                    <a
                        key={navLink.id}
                        ref={el => pushToRefsArray(el)}
                        className='opacity-0 text-sm text-light-300 md:text-light-200 hover:text-green font-mono transition-colors ease-in-out duration-500'
                        href={navLink.url}
                    >
                        <span className='text-green text-xs align-baseline'>
                            0{navLink.id}.&nbsp;
                        </span>
                        <span className='align-baseline'>{navLink.name}</span>
                    </a>
                ))}
                <a
                    ref={el => pushToRefsArray(el)}
                    className={`opacity-0 px-4 py-2 ${bigButton}`}
                >
                    Download CV
                </a>
            </nav>

            {/* Client component */}
            <DropdownClientContext />
        </header>
    )
}

export default Header
