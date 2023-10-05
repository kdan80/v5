import React, { SetStateAction } from 'react'
import { bigButton } from '@/styles'
import { siteConfig } from '@/config'
import Link from 'next/link'

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const DropdownNav = ({ isOpen, setIsOpen }: Props) => {
    const ref = React.useRef<HTMLElement | null>(null)
    const [transitionFinished, setTranstionFinished] = React.useState(false)

    // This side effect keeps track of when the nav has full transitioned so that other elements can then be animated
    React.useEffect(() => {
        if (!ref.current) return
        const nav = ref.current

        const handleTransition = () => {
            const position = nav.getBoundingClientRect()
            if (position.top === 0) return setTranstionFinished(true)
            setTranstionFinished(false)
        }

        nav.addEventListener('transitionend', handleTransition)
        return () => {
            nav?.removeEventListener('transitionend', handleTransition)
        }
    }, [])

    return (
        <nav
            ref={ref}
            // prettier-ignore
            className={
                `z-40 flex md:hidden justify-center items-center fixed top-0 left-0 w-full h-screen bg-[#303234aa] backdrop-blur-md transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}`
            }
        >
            {isOpen && transitionFinished && (
                <nav className='text-light-300 md:text-light-200 font-mono flex flex-col gap-16'>
                    {siteConfig.navLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.url}
                            onClick={() => setIsOpen(false)}
                            // prettier-ignore
                            className={`
                                ${link.id === 1 && 'animate-bounceInFromLeft1'} 
                                ${link.id === 2 && 'animate-bounceInFromLeft2'} 
                                ${link.id === 3 && 'animate-bounceInFromLeft3'}
                            `}
                        >
                            <span className='text-green text-sm align-baseline'>
                                0{index + 1}.&nbsp;
                            </span>
                            <span className='text-lg hover:text-green transition-colors ease-in-out duration-500'>
                                {link.name}
                            </span>
                        </a>
                    ))}
                    <Link
                        id='downloadCV'
                        rel='noopener noreferrer'
                        target='_blank'
                        href='/KieranDanseyCV.pdf'
                        onClick={() => setIsOpen(false)}
                        className={`animate-bounceInFromLeft4 navLink px-6 py-4 ${bigButton} text-lg`}
                    >
                        Download CV
                    </Link>
                </nav>
            )}
        </nav>
    )
}

export default DropdownNav
