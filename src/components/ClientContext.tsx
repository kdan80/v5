'use client'

import React from 'react'
import { Landing } from './sections'
import { DropdownNav, Header, SocialsList } from '@/components'
import useWelcomeAnimations from '../useWelcomeAnimations'

interface Props {
    children: React.ReactNode
}

const ClientContext = ({ children }: Props) => {
    const [scrolledToTop, setScrolledToTop] = React.useState(true)
    const [isOpen, setIsOpen] = React.useState(false)
    const welcomeAnimations = useWelcomeAnimations()

    React.useEffect(() => {
        // Disable page scroll when dropdown is open
        isOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [isOpen])

    React.useEffect(() => {
        welcomeAnimations()

        const entries = document.querySelectorAll('.observer')

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // prettier-ignore
                        (entry.target as HTMLElement).classList.add('show')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                rootMargin: '0px 0px -100px 0px',
            }
        )

        entries.forEach(entry => observer.observe(entry))
    }, [])

    return (
        <main className='text-light-200 flex flex-col items-center min-h-screen max-w-screen overflow-x-hidden'>
            <Header
                scrolledToTop={scrolledToTop}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <Landing setScrolledToTop={setScrolledToTop} />
            {children}
            <footer className='flex justify-center items-center h-[6rem] -mt-[6rem]'>
                <span className='text-medium-200 text-sm'>
                    Designed &amp; Built by Kieran Dansey
                </span>
            </footer>
            <SocialsList scrolledToTop={scrolledToTop} />

            <DropdownNav
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </main>
    )
}

export default ClientContext
